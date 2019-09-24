import React from 'react'
import { Route, matchPath, RouteProps } from 'react-router-dom'

interface KeepAliveRouteProps extends RouteProps {
  keepAlive: boolean
}

let cached = false

const KeepAliveRoute = ({
  keepAlive = true,
  component: Component,
  ...rest
}: KeepAliveRouteProps) => {
  if (keepAlive) {
    const matched = matchPath(window.location.pathname, rest)
    if (matched || cached) {
      cached = true
      return (
        <Route
          {...rest}
          path="/"
          render={props => {
            return (
              <div
                style={{
                  display: matched ? 'block' : 'none',
                }}
              >
                {Component && <Component {...props} />}
              </div>
            )
          }}
        />
      )
    }
    return <i />
  }
  cached = false
  return <Route {...rest} component={Component} />
}

export default KeepAliveRoute
