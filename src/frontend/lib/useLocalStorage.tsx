import React, { useState} from 'react';


const useLocalStorage = (slice: string = 'default') => {
  const [sliceName, setSliceName] = useState(slice)

  //initialize storage
  localStorage.setItem(sliceName, JSON.stringify({}));

  const getSlice = (): {[index:string]: any} => {
    return JSON.parse(localStorage.getItem(sliceName)!)
  }
  const setSlice = (obj: {[index:string]: any}) => {
    return localStorage.setItem(sliceName, JSON.stringify(obj))
  }

  const set = (k:string, v: any): void => {
    let _slice = getSlice();
    _slice[k] = v;
    return setSlice(_slice);
  }
  const get = (k: string): any => {
    let _slice = getSlice();
    return _slice[k]
  }
  const del = (k: string): any => {
    let _slice = getSlice();
    let output = _slice[k];
    delete _slice[k];
    setSlice(_slice);
    return output;
  }
  const clear = () => {
    localStorage.removeItem(sliceName)
  }
  return { set, get, del, clear}
};

export default useLocalStorage;