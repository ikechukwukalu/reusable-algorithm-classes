<?php

namespace Datastructures\Php\Hashtables;

class Hashtable
{

    private array $table = [];
    private int $size = 0;
    private int $length = 0;
    private array $resultArray = [];

    public function __construct(int $size = 20)
    {
        $this->size = $size;
    }

    public function __destruct()
    {
        unset($this->table);
    }

    public function generate_bucket($string): int
    {
        $hash = 17;

        for ($i = 0; $i < strlen($string); $i++) {
            $hash += (ord($string[$i]) + ($hash << 5) - $hash);
        }

        return $hash % $this->size;
    }

    public function add($string, $data): void
    {
        $bucket = $this->generate_bucket($string);

        $tmp_array = [];
        $tmp_array['string'] = $string;
        $tmp_array['data'] = $data;

        if (!isset($this->table[$bucket])) {
            $this->table[$bucket] = $tmp_array;
            $this->length ++;

            return;
        }

        //check for duplicate 0(n)
        // if (!is_null($this->search($string))) {
        //     return;
        // }

        $this->table[$bucket][] = $tmp_array;
        $this->length ++;
    }

    public function remove($string): ?array
    {
        $bucket = $this->generate_bucket($string);

        if (is_null($this->table[$bucket])) {
            return null;
        }

        foreach ($this->table[$bucket] as $key => $value) {
            if ($key === 'string') {
                if ($this->valueMatchesSearchString($value, $string)) {
                    $oldElement = [
                        'string' => $this->table[$bucket]['string'],
                        'data' => $this->table[$bucket]['data'],
                    ];
                    unset($this->table[$bucket]['string']);
                    unset($this->table[$bucket]['data']);
                    $this->length --;

                    if (empty($this->table[$bucket])) {
                        unset($this->table[$bucket]);
                    }

                    return $oldElement;
                }
            }

            $element = $this->table[$bucket][$key];

            if (!is_array($element)) {
                continue;
            }

            foreach($element as $index => $element_value) {
                if ($index !== 'string') {
                    continue;
                }

                if ($this->valueMatchesSearchString($element_value, $string)) {
                    unset($this->table[$bucket][$key]);
                    $this->length --;

                    return $element;
                }
            }
        }

        return null;
    }

    public function search($string): ?array
    {
        $bucket = $this->generate_bucket($string);

        if (is_null($this->table[$bucket])) {
            return null;
        }

        foreach ($this->table[$bucket] as $key => $value) {
            if ($key === 'string') {
                if ($this->valueMatchesSearchString($value, $string, $this->table[$bucket])) {
                    return $this->resultArray;
                }
            }

            $element = $this->table[$bucket][$key];

            if (!is_array($element)) {
                continue;
            }

            foreach($element as $index => $element_value) {
                if ($index !== 'string') {
                    continue;
                }

                if ($this->valueMatchesSearchString($element_value, $string, $element)) {
                    return $this->resultArray;
                }
            }
        }

        return null;
    }

    public function length(): int
    {
        return $this->length;
    }

    public function viewHashTable(): array
    {
        return $this->table;
    }

    public function lastSearchResult(): array
    {
        return $this->resultArray;
    }

    private function valueMatchesSearchString($value, $string, $element = null): bool
    {
        if (strcmp($value, $string) === 0) {
            if (isset($element)) {
                $this->resultArray = $element;
            }

            return true;
        }

        return false;
    }
}
