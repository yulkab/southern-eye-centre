import React from 'react';
import { Link } from "react-router-dom";
import { Accordion } from 'semantic-ui-react'

const panels = [
  {
    key: '1',
    title: {
      content: 'When will I need cataract surgery?'
    },
    content: {
      content: (
        <p>
          In the early stages, some cataracts can be left untreated. When your sight deteriorates to a point where it interferes with your ability to carry out daily tasks (including seeing in low-light situations such as at night), it could be time to consider surgery.
What is the success rate?
        </p>
      ),
    },
  },
  {
    key: '2',
    title: {
      content: 'How long does cataract surgery take?'
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
      content: 'Will it hurt?'
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
      content: 'What if I blink?'
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
      content: 'Will I be awake?'
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
      content: 'What will I see during surgery?'
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
      content: 'Will my eye hurt afterwards?'
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
      content: 'How long does it take to recover from cataract surgery?'
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
      content: 'How long before I can drive a car?'
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
      content: 'Can both eyes be operated on at the same time?'
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
      content: 'When will I get the second eye done?'
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
      content: 'Will I still need glasses after cataract surgery or lens exchange?'
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
      content: 'What are the risks?'
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
      content: 'Does laser cataract surgery cost more?'
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
      content: 'Is everyone suitable for laser cataract surgery?'
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
    <div className="page-content e-tabLink">         
        <Link to="/eye-conditions" className="more-info left" title="Read more about Eye Conditions">Eye Conditions</Link>
        <Link to="/visit" className="more-info" title="Read more about When You Visit">When You Visit</Link>    
    </div>         
  </article>
);

export default Faq;
