import Link from "next/link";
import Script from 'next/script';
import "./globals.css";


export default function RootLayout({ children, bodyclassNameName }) {

  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" type="image/icon" href="/images/favicon.ico" />
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" strategy="beforeInteractive" />

       
  

      </head>
      <body>
        <div id="mu-hero">
          <header id="mu-header" className="" role="banner">
            <div className="container">

              <nav className="navbar navbar-default mu-navbar">
                <div className="container-fluid">

                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                      data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>


                    <Link className="navbar-brand nick" href="/">
                      Kevin Rattan</Link>

                  </div>

                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav mu-menu navbar-right">
                      <li>
                        <Link href="/">HOME</Link>
                      </li>
                      <li className="dropdown">
                        <Link className="dropdown-toggle" data-toggle="dropdown" href="#">BOOKS
                          <span className="caret"></span>
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link href="/boundwithskin">Bound With Skin</Link>
                          </li>
                          <li>
                            <Link href="/elementary">Elementary</Link>
                          </li>
                          <li>
                            <Link href="/fairy">The Fairy Rescue League</Link>
                          </li>
                          <li>
                            <Link href="/wildwood">FRL2: The Wildwood</Link>
                          </li>
                          <li>
                            <Link href="/littlepeople">FRL3: The Little People</Link>
                          </li>
                          <li>
                            <Link href="/newdawnfades">New Dawn Fades</Link>
                          </li>
                          <li>
                            <Link href="/remember">Remember, Remember</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/consult">CONSULTANCY</Link>
                      </li>
                      <li>
                        <Link href="/contact">CONTACT</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </header>
          {children}
          <footer id="mu-footer" role="contentinfo">
            <div className="container">
              <div className="mu-footer-area">
                <p className="mu-copyright">&copy; Copyright <a rel="nofollow" href="http://nickdeblegny.com">Kevin Rattan</a>. All rights reserved.</p>
              </div>
            </div>

          </footer>
        </div>
      </body>
    </html>
  );
}
