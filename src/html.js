import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

export default class HTML extends React.Component {

  render () {
    const head = Helmet.rewind();

    let jquery = (
      <script
        src='https://code.jquery.com/jquery-3.1.1.slim.min.js'
        integrity='sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n'
        crossOrigin='anonymous'
      />
    );

    let tether = (
      <script
        src='https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js'
        integrity='sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb'
        crossOrigin='anonymous'
      />
    );

    let bootstrap = (
      <script
        src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js'
        integrity='sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn'
        crossOrigin='anonymous'
      />
    );

    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require('!raw!../public/styles.css')
          }}
        />
      );
    }

    return (
      <html lang='en'>
        <head>
          <meta
            charSet='utf-8'
          />
          <meta
            name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          {this.props.headComponents}
          {css}
        </head>
        <body>
          <div
            id='___gatsby'
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          { jquery }
          { tether }
          { bootstrap }
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  body: PropTypes.string
};
