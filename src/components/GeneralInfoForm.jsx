export default function GeneralInfoForm(props) {
    return (
        <div className="form-group general-info">
            <h1>General Info</h1>
            <input
                type="text"
                placeholder="Name"
                value={props.data.name}
                onChange={(e) => props.onChange({name: e.target.value})}
            />
            <input
                type="text"
                placeholder="Address"
                value={props.data.address}
                onChange={(e) => props.onChange({address: e.target.value})}
            />
            <input
                type="text"
                placeholder="Number"
                value={props.data.number}
                onChange={(e) => props.onChange({number: e.target.value})}
            />
            <input
                type="text"
                placeholder="Email"
                value={props.data.email}
                onChange={(e) => props.onChange({email: e.target.value})}
            />
        </div>
    );
}
