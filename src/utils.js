
export const curry = (f, ...fn) => fn.length === f.length ? f(...fn) : curry.bind(this, f, ...fn)

export const compose = (f,...fn) => fn.length === 0 ? f : (...args) => f(compose(...fn)(...args))
