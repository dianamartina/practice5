import React from 'react';
import './UserAddForm.css';
class UserAddForm extends React.Component {
    // UserAddForm primeste props ca parametru pentru constructor si ii paseaza ca parametru pentru super.
    constructor(props) {
        super(props);        
        this.state = {
            name: '',
            email: '',
            isGoldClient: false
        };
    }
    
    updateName(event) {
        // In campul din state corespunzator se stocheaza valoarea introdusa de utilizator.
        this.setState({name: event.target.value});     
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateIsGoldClient (event) {       
        this.setState({isGoldClient: event.target.checked});
    }

    render() {
        
        const {name, email, isGoldClient} = this.state;
        const {submitAddForm} = this.props;       
        
        return (
            <form 
                className="user-add-form"
                onSubmit={(event) => submitAddForm(event, name, email, isGoldClient)}
            >
                <h2>Add users:</h2>
                
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    // Cand utilizatorul va tasta ceva nou, se va declansa eventul onChange.
                    // La declansare, se va executa metoda updateName.
                    onChange={(event) => this.updateName(event)}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    onChange={(event) => this.updateEmail(event)}
                />
                <label htmlFor="is-gold-client">Gold client</label>
                <input
                    type="checkbox"
                    name="is-gold-client"
                    value="true"
                    onChange={(event) => this.updateIsGoldClient(event)}
                />

                <input className="user-add-form-btn" type="submit" value="Add user"/>
            </form>
        )
    }
}

export default UserAddForm;