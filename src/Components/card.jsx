import PropTypes from "prop-types";

const Card = ({ name, imageUrl, skills, mobile, email }) => {
  return (
    <div className="card text-center shadow-lg m-2">
      <div className="card-body">
        <img
          className="rounded-3"
          width="140"
          src={imageUrl}
          alt="programmer"
        />
        <h5 className="text-center mt-3">{name}</h5>
        <div className="fs-sm">{skills}</div>
        <div className="fs-sm mt-3">{mobile}</div>
        <div className="fs-sm ">{email}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Card;
