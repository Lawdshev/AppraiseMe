import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import indexStyles from '../styles/index.module.css'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items:1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items:1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
function CarouselSlide () {
    return (
        <Carousel 
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", 'desktop']}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px" 
       className="h-full ">
          <p className={`w-4/5 3xl:w-[90%] mx-auto text-[12px] leading-[200%] md:text-[15px] h-[80%] md:leading-[43.5px] 3xl:leading-[150%] ${indexStyles.missionCommentsText}`}>Our approach to performance appraisal is simple: leverage your employees’ skills while rewarding performance. AppraiseMe is a flexible and insightful platform that will help you grow your people so you can grow your business.</p>
          <div>Item 2</div>
          <div>Item 3</div>
        </Carousel>
    )
}

export default CarouselSlide;