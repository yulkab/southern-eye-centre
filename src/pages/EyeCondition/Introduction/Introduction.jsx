import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Image } from 'semantic-ui-react'
import contImg1 from 'assets/img/eye-conditions/cataract/cataract-anatomy@2x.png';
import contImg12 from 'assets/img/eye-conditions/cataract/cataract-anatomy.png';
import contImg2 from 'assets/img/eye-conditions/cataract/1.jpg';
import contImg3 from 'assets/img/eye-conditions/cataract/2.jpg';
import contImg4 from 'assets/img/eye-conditions/cataract/3.jpg';

const Introduction = props => (
  <article>
    <div className="c-aside-section">
      <aside className="c-aside-section_aside d-fx-bottom">
        <p className="more-info" title="Read more about Symtoms, Causes &amp; Prevention">More Info<span>Symtoms, Causes &amp; Prevention</span></p>
      </aside>
      <div className="c-aside-section_content">
        <section className="wrapped top-line">
          <h4>Overview</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue. Maecenas vel arcu feugiat, rutrum sapien at, auctor arcu. Duis vitae pellentesque ligula. Nunc egestas velit sed lorem ultrices, imperdiet finibus leo tempor. Curabitur accumsan pellentesque placerat. Quisque gravida tortor ipsum. Suspendisse non turpis in ipsum accumsan scelerisque. In vulputate tellus vel quam tincidunt, sed placerat nibh pulvinar. Vivamus a viverra erat. Curabitur velit libero, maximus vel tellus in, molestie fermentum nisi. Fusce vitae nunc in tortor dictum commodo. Sed sagittis vestibulum elit, eu mattis quam tempus vitae. Quisque ultrices magna eu iaculis accumsan. Vivamus dictum a urna at luctus.
          </p>
          <p>
            Morbi vestibulum odio elementum, commodo magna non, ornare ante. Donec iaculis diam convallis placerat vulputate. Suspendisse maximus, elit id efficitur elementum, quam risus viverra eros, eu consectetur magna nulla ac arcu. Fusce consequat maximus magna a fermentum. Proin viverra vel ipsum vitae consequat. Quisque euismod augue nunc, ut molestie leo molestie sed. Mauris pharetra, velit sed vestibulum venenatis, dolor enim molestie mauris, eget lacinia sem sapien in est. Curabitur venenatis elementum magna, sed mattis ante fermentum non.       
          </p>         
        </section>     
        <Grid>
          <Grid.Column mobile={16} largeScreen={8}  widescreen={8}>
            <p>
              Vestibulum dignissim, ligula sed volutpat facilisis, dolor leo maximus ex, quis sagittis dui sapien in magna. Maecenas vulputate at est non pretium. Mauris id mauris est. Duis commodo fringilla consectetur. Morbi porta, dui vitae pulvinar pharetra, mi felis pretium sapien, ac cursus mi risus tincidunt magna. Nullam vitae dictum nulla, a molestie felis. Donec arcu urna, cursus sed mi vitae, malesuada vehicula tellus. Fusce commodo nisi et auctor elementum.Morbi vestibulum odio elementum, commodo magna non, ornare ante. Donec iaculis diam convallis placerat vulputate. Suspendisse maximus, elit id efficitur elementum, quam risus viverra eros, eu consectetur magna nulla ac arcu. Fusce consequat maximus magna a fermentum. Proin viverra vel ipsum vitae consequat. Quisque euismod augue nunc, ut molestie leo molestie sed. Mauris pharetra, velit sed vestibulum venenatis, dolor enim molestie mauris, eget lacinia sem sapien in est. Curabitur venenatis elementum magna, sed mattis ante fermentum non. 
            </p>  
          </Grid.Column>
          <Grid.Column mobile={16} largeScreen={8} widescreen={8} className="d-medium-none">
            <Image src={contImg1} alt="Cataract Overview section"/>
          </Grid.Column>
        </Grid>                                                         
      </div>
    </div> 

    <div className="c-photos">
      <div className="c-photos--mob-only d-no-bg">
        <Image src={contImg12} alt="Cataract Photo"/>
      </div>
      <div>
        <Image src={contImg2} alt="Cataract Photo"/>
        <span className="c-photos--captions">Cataract</span>
      </div>
      <div className="c-photos--split">
        <Image src={contImg3} alt="Cataract Photo"/>
        <span className="c-photos--captions">Normal vision</span>
      </div>
      <div>
        <Image src={contImg4} alt="Cataract Photo"/>
        <span className="c-photos--captions">Cataract vision</span>
      </div>
    </div> 

    <div className="padding">
      <Grid relaxed>
        <Grid.Row>              
          <Grid.Column tablet={16} computer={5}>
            <hr/>
              <h4>Symtoms</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
              </p>
              <ul className="e-bulleted">
                <li>Symtoms 1</li>
                <li>Symtoms 2</li>
                <li>Symtoms 3</li>
                <li>Symtoms 4</li>
              </ul>         
          </Grid.Column>
          <Grid.Column tablet={16} computer={5}>
            <hr/>
              <h4>Causes</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue. Maecenas vel arcu feugiat, rutrum sapien at, auctor arcu. Duis vitae pellentesque ligula. Nunc egestas velit sed lorem ultrices, imperdiet finibus leo tempor. 
              </p>
              <p>
                Curabitur accumsan pellentesque placerat. Quisque gravida tortor ipsum. Suspendisse non turpis in ipsum accumsan scelerisque. In vulputate tellus vel quam tincidunt, sed placerat nibh pulvinar. Vivamus a viverra erat. Curabitur velit libero, maximus vel tellus in, molestie fermentum nisi. Fusce vitae nunc in tortor dictum commodo. Sed sagittis vestibulum elit, eu mattis quam tempus vitae. Quisque ultrices magna eu iaculis accumsan. Vivamus dictum a urna at luctus.
              </p>
          </Grid.Column>
          <Grid.Column tablet={16} computer={5}>
            <hr/>
              <h4>Prevention</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue. Maecenas vel arcu feugiat, rutrum sapien at, auctor arcu. Duis vitae pellentesque ligula. Nunc egestas velit sed lorem ultrices, imperdiet finibus leo tempor. 
              </p>
              <p>
                Curabitur accumsan pellentesque placerat. Quisque gravida tortor ipsum. Suspendisse non turpis in ipsum accumsan scelerisque. In vulputate tellus vel quam tincidunt, sed placerat nibh pulvinar. Vivamus a viverra erat. Curabitur velit libero, maximus vel tellus in, molestie fermentum nisi. Fusce vitae nunc in tortor dictum commodo. Sed sagittis vestibulum elit, eu mattis quam tempus vitae. Quisque ultrices magna eu iaculis accumsan. Vivamus dictum a urna at luctus.
              </p>
              <p>
                Curabitur velit libero, maximus vel tellus in, molestie fermentum nisi. Fusce vitae nunc in tortor dictum commodo. Sed sagittis vestibulum elit, eu mattis quam tempus vitae. Quisque ultrices magna eu iaculis accumsan. Vivamus dictum a urna at luctus.
              </p>
          </Grid.Column> 
        </Grid.Row>
      </Grid>           
    </div>

    <div className="c-aside-section">
      <aside className="c-aside-section_aside"></aside>
      <div className="c-aside-section_content">
      <p className="e-tabLink">
        <Link to="/cataract/procerures" className="more-info" title="Read more info about Procedures &amp; Treatments">PROCEDURES</Link>
      </p>      
      </div>
    </div>        
</article>
);

// Introduction.propTypes = {
//   // bla: PropTypes.string,
// };

// Introduction.defaultProps = {
//   // bla: 'test',
// };

export default Introduction;
