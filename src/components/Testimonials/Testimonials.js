import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";

export default function Testimonials() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Aarav Sharma",
      review: "Absolutely fresh and premium quality mushrooms!",
      rating: 5,
      verified: true,
      helpful: 12,
      liked: false
    },
    {
      id: 2,
      name: "Priya Verma",
      review: "Delivery was quick and packaging was excellent.",
      rating: 4,
      verified: true,
      helpful: 8,
      liked: false
    }
  ]);

  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !reviewText) return;

    const newReview = {
      id: Date.now(),
      name,
      review: reviewText,
      rating,
      verified: false,
      helpful: 0,
      liked: false
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setReviewText("");
    setRating(5);
  };

  const toggleHelpful = (id) => {
    setReviews(
      reviews.map((review) =>
        review.id === id
          ? {
              ...review,
              helpful: review.liked
                ? review.helpful - 1
                : review.helpful + 1,
              liked: !review.liked
            }
          : review
      )
    );
  };

  const averageRating = useMemo(() => {
    const total = reviews.reduce((acc, item) => acc + item.rating, 0);
    return (total / reviews.length).toFixed(1);
  }, [reviews]);

  return (
    <section className="review-section">
      <h2>Customer Reviews</h2>

      {/* Compact Review Form */}
      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Share your experience..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />

        <div className="rating-select">
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              className={num <= rating ? "active-star" : ""}
              onClick={() => setRating(num)}
            >
              ★
            </span>
          ))}
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Rating Summary */}
      <div className="avg-display">
        ⭐ {averageRating} / 5 ({reviews.length} reviews)
      </div>

      {/* Reviews */}
      <div className="review-grid">
        {reviews.map((item) => (
          <motion.div
            key={item.id}
            className="review-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="card-header">
              <strong>{item.name}</strong>
              {item.verified && (
                <span className="verified">✔ Verified</span>
              )}
            </div>

            <div className="stars">
              {"★".repeat(item.rating)}
            </div>

            <p>{item.review}</p>

            <button
              className={`helpful-btn ${item.liked ? "liked" : ""}`}
              onClick={() => toggleHelpful(item.id)}
            >
              👍 Helpful ({item.helpful})
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}