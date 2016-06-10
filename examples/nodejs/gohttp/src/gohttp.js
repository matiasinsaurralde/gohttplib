import ffi from 'ffi'

var libgohttp = ffi.DynamicLibrary('libgohttp.so')

export function run() {
  var p_listenAndServe = libgohttp.get('ListenAndServe'),
      listenAndServe = ffi.ForeignFunction( p_listenAndServe, "void", ["string"])
  listenAndServe(":8000")
  console.log(listenAndServe)
}
