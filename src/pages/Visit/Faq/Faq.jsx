import React from 'react';
import { Link } from "react-router-dom";
import { Accordion } from 'semantic-ui-react'

const panels = [
  {
    key: '1',
    title: {
      content: 'Question 1?'
    },
    content: {
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue. Maecenas vel arcu feugiat, rutrum sapien at, auctor arcu. Duis vitae pellentesque ligula. Nunc egestas velit sed lorem ultrices, imperdiet finibus leo tempor. Curabitur accumsan pellentesque placerat. Quisque gravida tortor ipsum. Suspendisse non turpis in ipsum accumsan scelerisque. In vulputate tellus vel quam tincidunt, sed placerat nibh pulvinar. Vivamus a viverra erat. Curabitur velit libero, maximus vel tellus in, molestie fermentum nisi. Fusce vitae nunc in tortor dictum commodo. Sed sagittis vestibulum elit, eu mattis quam tempus vitae. Quisque ultrices magna eu iaculis accumsan. Vivamus dictum a urna at luctus.
              </p>
      ),
    },
  },
  {
    key: '2',
    title: {
      content: 'Question 2?'
    },
    content: {
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
          </p>
      ),
    },
  },
  {
    key: '3',
    title: {
      content: 'Question 3?'
    },
    content: {
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
          </p>
      ),
    },
  },
  {
    key: '4',
    title: {
      content: 'Question 4?'
    },
    content: {
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
          </p>
      ),
    },
  },
  {
    key: '5',
    title: {
      content: 'Question 5?'
    },
    content: {
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
          </p>
      ),
    },
  },
  {
    key: '6',
    title: {
      content: 'Question 6?'
    },
    content: {
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
          </p>
      ),
    },
  },
  {
    key: '7',
    title: {
      content: 'Question 7?'
    },
    content: {
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
          </p>
      ),
    },
  },
  {
    key: '8',
    title: {
      content: 'Question 8?'
    },
    content: {
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
          </p>
      ),
    },
  },
  {
    key: '9',
    title: {
      content: 'Question 9?'
    },
    content: {
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
          </p>
      ),
    },
  },
  {
    key: '10',
    title: {
      content: 'Question 10?'
    },
    content: {
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
          </p>
      ),
    },
  },
  {
    key: '11',
    title: {
      content: 'Question 11?'
    },
    content: {
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
          </p>
      ),
    },
  },
  {
    key: '12',
    title: {
      content: 'Question 12?'
    },
    content: {
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
          </p>
      ),
    },
  },
  {
    key: '13',
    title: {
      content: 'Question 13?'
    },
    content: {
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
          </p>
      ),
    },
  },
  {
    key: '14',
    title: {
      content: 'Question 14?'
    },
    content: {
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
          </p>
      ),
    },
  },
  {
    key: '15',
    title: {
      content: 'Question 15?'
    },
    content: {
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
          </p>
      ),
    },
  },
]

const Faq = () => (
  <article>
    <div className="c-aside-section">
      <aside className="c-aside-section_aside"></aside>
      <div className="c-aside-section_content">
        <section className="wrapped top-line">
          <h4>Frequently Asked Questions</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
          </p>

          <Accordion defaultActiveIndex={0} panels={panels} />

        </section>
      </div>
    </div>
    <div className="c-aside-section">
      <aside className="c-aside-section_aside"></aside>
      <div className="c-aside-section_content">

        <div className="page-content e-tabLink">
          <Link to="/eye-conditions" className="more-info" title="Read more about Eye Conditions">Eye Conditions</Link>
        </div>

        <div className="e-titleBlock">
          <small>When You Visit</small>
          <h1>FAQ</h1>
        </div>
      </div>
    </div>
  </article>
);


export default Faq;
