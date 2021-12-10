function FoodCard({ props }) {
  return (
    <div style={{ padding: "10px", border: "1px solid #ccc", flex: "0 0 30%" }}>
      <div>
        <img
          src={props.strMealThumb}
          alt={props.strMeal}
          width="20%"
          height="20%"
        />
      </div>

      <div>
        <h4>
          #{props.idMeal}: {props.strMeal}
        </h4>
      </div>
    </div>
  );
}

export default FoodCard;
