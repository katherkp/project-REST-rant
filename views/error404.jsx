const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <img src="/images/404-kitty.jpg"></img>
              Photo by <a href="https://unsplash.com/@alvannee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alvan Nee</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </main>
      </Def>
    )
  }

module.exports = error404
