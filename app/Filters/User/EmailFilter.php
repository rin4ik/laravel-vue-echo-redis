<?php

namespace App\Filters\User;

use App\Filters\FilterAbstract;
use Illuminate\Database\Eloquent\Builder;

class EmailFilter extends FilterAbstract
{
    /**
     * Filter by course access type (free, premium).
     *
     * @param  string $access
     * @return Illuminate\Database\Eloquent\Builder
     */
    public function filter(Builder $builder, $value)
    {
        return $builder->where('email', $value);
    }
}
