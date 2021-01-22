<?php

namespace App\Services;

class FeedService
{
    /**
     * Stores an instance of SimplePie object.
     *
     * @var object
     */
    private $feed;

    /**
     * Words to ignore when counting the number of times a word has been used.
     *
     * @var array
     */
    private $stopWords = [];

    /**
     * Frequently uses words with the number of times they were used.
     *
     * @var array
     */
    private $frequentWords = [];

    /**
     * Registers an instance of SimplePie object to $reader property.
     *
     * @return void
     */
    public function __construct()
    {
        $this->feed = \Feeds::make([config('mintos.rss.url')]);
        $this->stopWords = config('mintos.stop_words');
    }

    public function takeRandom()
    {
        $randomNumber = rand(0, 40);
        $feeds = array_slice($this->fetchFeeds(), $randomNumber, 10);
        $this->extractFrequentWords($feeds);

        return [
            'frequent' => $this->frequentWords,
            'feeds' => $feeds,
        ];
    }

    public function fetchFeeds()
    {
        $items = $this->feed->get_items();
        $feeds = [];
        foreach ($items as $item) {
            $feed = [
                'url' => $item->get_permalink(),
                'title' => $item->get_title(),
                'author' => $item->get_author(),
                'text' => trim(strip_tags($item->get_description())),
                'date' => $item->get_date(),
            ];
            array_push($feeds, $feed);
        }

        return $feeds;
    }

    /**
     * Extracts all the common words used in the feed.
     *
     * @return void
     */
    private function extractFrequentWords($arr)
    {
        foreach ($arr as $item) {
            $string = $item['text'];
            // only take alphanumerical characters, but keep the spaces
            $string = preg_replace('/[^a-zA-Z ]/', '', $string);
            $string = strtolower($string); // make it lowercase
            // create array of words used in the string
            $words = explode(' ', $string);
            foreach ($words as $word) {
                if ($this->filterForStopWords($word) || $word === '' || ! $word) {
                    continue;
                }
                // add the word in frequently used words
                $this->addToFrequent($word);
            }
            // sort array by frequency number
            arsort($this->frequentWords);
            // keep only 10 words
            $this->frequentWords = array_slice($this->frequentWords, 0, 10);
        }
    }

    /**
     * Filter for stop words.
     *
     * @return bool
     */
    private function filterForStopWords($word)
    {
        return in_array($word, $this->stopWords);
    }

    /**
     * Check if word already in the frequent list then
     * just increase the number otherwise add to list.
     *
     * @return void
     */
    private function addToFrequent($word)
    {
        if (isset($this->frequentWords[$word])) {
            $this->frequentWords[$word]++;
        } else {
            $this->frequentWords[$word] = 1;
        }
    }
}
