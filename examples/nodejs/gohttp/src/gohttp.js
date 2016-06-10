import ffi from 'ffi'

var libgohttp = ffi.DynamicLibrary('libgohttp.so'),
    p_listenAndServe = libgohttp.get('ListenAndServe')

export function run(...args) {
  return ffi.ForeignFunction( p_listenAndServe, "void", ["string"])(args[0])
}
