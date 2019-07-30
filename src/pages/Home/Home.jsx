import React, { PureComponent } from 'react';
import asideimg from '../../assets/img/home-side.jpg';

class Home extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Home will mount');
  }

  componentDidMount = () => {
    console.log('Home mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Home will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Home will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Home did update');
  }

  componentWillUnmount = () => {
    console.log('Home will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Oops... Something went wrong.</h1>;
    }
    return (
      <React.Fragment>
        <div className="page-content">
          <section className="centred-632">
            <h1 className="super-title">See More, Do More</h1>
            <p>
              Southern Eye Centre has been providing quality eye care for adults and children in the Frankston, Mornington Peninsula and South Gipplsand areas since 1997.      
            </p>
            <p>
              With a fully accredited surgical theatre, state of the art diagnostic tools and a diverse range of eye specialists, all your eye care needs can be addressed at our centre.
            </p>
            <a href="#"  className="c-button">Call For An Appointment</a>
          </section>     

          <div className="c-aside-section">
            <div className="c-aside-section_content">
              <section className="wrapped">
                <h4>Assessments and Evaluations</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue. Maecenas vel arcu feugiat, rutrum sapien at, auctor arcu. Duis vitae pellentesque ligula. Nunc egestas velit sed lorem ultrices, imperdiet finibus leo tempor. Curabitur accumsan pellentesque placerat. Quisque gravida tortor ipsum. Suspendisse non turpis in ipsum accumsan scelerisque. In vulputate tellus vel quam tincidunt, sed placerat nibh pulvinar. Vivamus a viverra erat. Curabitur velit libero, maximus vel tellus in, molestie fermentum nisi. Fusce vitae nunc in tortor dictum commodo. Sed sagittis vestibulum elit, eu mattis quam tempus vitae. Quisque ultrices magna eu iaculis accumsan. Vivamus dictum a urna at luctus.
                </p>
                <p>
                  Morbi vestibulum odio elementum, commodo magna non, ornare ante. Donec iaculis diam convallis placerat vulputate. Suspendisse maximus, elit id efficitur elementum, quam risus viverra eros, eu consectetur magna nulla ac arcu. Fusce consequat maximus magna a fermentum. Proin viverra vel ipsum vitae consequat. Quisque euismod augue nunc, ut molestie leo molestie sed. Mauris pharetra, velit sed vestibulum venenatis, dolor enim molestie mauris, eget lacinia sem sapien in est. Curabitur venenatis elementum magna, sed mattis ante fermentum non.       
                </p>
              </section>     
            </div>
          </div> 
          
        </div>
        <aside className="page-aside">
          <img src={asideimg} alt="background image"/>
        </aside>
      </React.Fragment>
    );
  }
}

export default Home;
