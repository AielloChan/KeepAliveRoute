import React from 'react'
import { Route, matchPath, RouteProps } from 'react-router-dom'

interface KeepAliveRouteProps extends RouteProps {
  keepAlive: boolean
}

const KeepAliveRoute = ({
  keepAlive = true,
  component: Component,
  ...rest
}: KeepAliveRouteProps) => {
  if (keepAlive) {
    const matched = matchPath(window.location.pathname, rest)
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
  return <Route {...rest} component={Component} />
}

export default KeepAliveRoute
