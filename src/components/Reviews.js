
const Reviews = ({ venue }) => {

    const content = venue[0].reviews.map(review => (
        <div className="review">
            <h2>{review.title}</h2>
            <h3>{review.blurb}</h3>
        </div>
    ))

    return (
        <div className="all-reviews">
            {content}
        </div>
    )
}
 
export default Reviews;