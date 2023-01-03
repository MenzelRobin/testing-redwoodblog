import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { useRouterState } from '@redwoodjs/router/dist/router-context'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header>
        <div className="flex-between">
          <h1>
            <Link to={routes.home()}>Robin's Redwood Test-Blog</Link>
          </h1>
          {isAuthenticated ? (
            <div>
              <span>Logged in as {currentUser.email}</span>{' '}
              <button type="button" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to={routes.login()}>Login</Link>
          )}
        </div>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer style={{ position: 'absolute', bottom: 0 }}>
        <p>
          Made with ♥️ by{' '}
          <a
            href="https://github.com/MenzelRobin"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            Robin
          </a>{' '}
          - v0.5
        </p>
      </footer>
    </>
  )
}

export default BlogLayout
