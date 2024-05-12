import { useDebounce } from '@/hooks/useDebounce';
import React, { FC, useEffect, useState } from 'react';

interface IRangeProps {
    min?: number;
    max: number;
    fromInitial?: string;
    toInitial?: string;
    onChangeFrom: (value: string) => void;
    onChangeTo: (value: string) => void;
}

const Range: FC<IRangeProps> = ({ max = 0, min, onChangeFrom, onChangeTo, fromInitial, toInitial }) => {

    const [from, setFrom] = useState(fromInitial || '');
    const [to, setTo] = useState(toInitial || '');

    const debouncedFrom = useDebounce(from, 500);
    const debouncedTo = useDebounce(to, 500);

    useEffect(() => {
        onChangeFrom(debouncedFrom);
    }, [debouncedFrom]);

    useEffect(() => {
        onChangeTo(debouncedTo);
    }, [debouncedTo]);

    return (
        <div className='flex items-center text-sm text-black'>
            <input
                className="border border-gray-300 rounded-md px-3 py-2 w-24"
                type='number'
                min={min}
                max={max}
                placeholder='От'
                value={from}
                onChange={e => setFrom(e.target.value)}
            />
            <span className="mx-2 text-white">-</span>
            <input
                className="border border-gray-300 rounded-md px-3 py-2 w-24"
                type='number'
                min={min}
                max={max}
                placeholder='До'
                value={to}
                onChange={e => setTo(e.target.value)}
            />
        </div>
    )
}

export default Range;
