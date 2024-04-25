
export default function CostEvaluationDiv({ cost }) {
    return (
        <div>
            <h2>Evaluated cost</h2>
            <p>Evaluated cost with chosen variables is</p>
            <p><b>~{cost} €</b></p>
            <p>Give us more information to get an even more accurate evaluation</p>
        </div>
    );
}