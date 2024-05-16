// Import {useEffect, useState} from 'react';

import {useState, useEffect, type Dispatch, type SetStateAction} from 'react';

type SaveableData = string | number | Record<string, unknown> | boolean | undefined;

// Const usePersist = () => {
// 	// Const [persist, setPersist] = useState<string>(
// 	// 	localStorage.getItem('persist')?.toLocaleLowerCase() ?? 'false'.toLowerCase()
// 	// );

// 	const [persist, setPersist] = useState<boolean>(
// 		JSON.parse(localStorage.getItem('persist') ?? 'false'.toLowerCase()),
// 	);

// 	useEffect(() => {
// 		// LocalStorage.setItem('persist', persist);
// 		localStorage.setItem('persist', JSON.stringify(persist));
// 	}, [persist]);

// 	return [persist, setPersist];
// };

// const usePersist = () => {
// 	const [persist, setPersist] = useState<string>(JSON.parse(localStorage.getItem('persist')));

// 	useEffect(() => {
// 		localStorage.setItem('persist', JSON.stringify(persist));
// 	}, [persist]);

// 	return [persist, setPersist];
// };

// const usePersist = () => {
// 	const [persist, setPersist] = useState<string>(JSON.parse(localStorage.getItem('persist')));

// 	useEffect(() => {
// 		localStorage.setItem('persist', JSON.stringify(persist));
// 	}, [persist]);

// 	return [persist, setPersist];
// };

function usePersist<T extends SaveableData>(
	defaultValue: T,
	key: string,
	initialization?: (savedValue: T) => T,
): [value: T, setValue: Dispatch<SetStateAction<T>>] {
	const [value, setValue] = useState(() => {
		const v = localStorage.getItem(key);
		if (v === null) {
			return defaultValue;
		}

		try {
			const saved = JSON.parse(v) as T;
			return initialization ? initialization(saved) : saved;
		} catch (e) {
			console.error('error parsing saved state from useStickyState');
			return defaultValue;
		}
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}

export default usePersist;
