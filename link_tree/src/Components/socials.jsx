import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlack,faGithub } from '@fortawesome/free-brands-svg-icons'


class Socials extends Component {
    render() { 
        return (
            <div className="socials">
                <ul>
                    <li>
                        <a id='slack_' href="https://hng9.slack.com/team/U04903CUJL9"><FontAwesomeIcon icon={faSlack} /></a>
                    </li>
                    <li>
                    <a href="https://github.com/austynomilan"><FontAwesomeIcon icon={faGithub} /></a>
                    </li>
                </ul>
            </div>
        );
    }
}
 
export default Socials;