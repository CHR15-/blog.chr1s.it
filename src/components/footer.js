import React from 'react';
import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2),
          paddingTop: 0,
        }}
      >
        <div style={{ float: 'right' }}>
          &nbsp;
          <a href="https://chr1s.it" rel="noopener noreferrer">
            chr1s.it
          </a>
        </div>
        <div style={{ float: 'right' }}>
          <a href="https://blog.chr1s.it" rel="noopener noreferrer">
            T H O U G H T S
          </a>{' '}
          &bull;
        </div>
        <a
          href="https://mobile.twitter.com/_chris__evans_"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/chr15-"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://www.linkedin.com/in/cwmevans/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
      </footer>
    );
  }
}

export default Footer;