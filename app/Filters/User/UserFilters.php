<?php

namespace App\Filters\User;

use App\Filters\FiltersAbstract;

class UserFilters extends FiltersAbstract
{
    /**
     * Default course filters.
     *
     * @var array
     */
    protected $filters = [
        'email' => EmailFilter::class,
        'name' => NameFilter::class,
    ];
}
