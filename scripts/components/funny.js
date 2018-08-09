import React from 'react';
class Funny extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    upVote(id) {
        this.props.onUpVote(id);
    }

    downVote(id) {
        this.props.onDownVote(id);
    }




    render() {
        return (


            <div className="container"id="funnyPage">
                <h1 className="title"id="funnyTitle"> FUNNY </h1>
                <ul>
                    {
                        this.props.masterList.filter(a => a.category == "Funny").map((x) => {


                            return (
                                <div className="border1" id="post" key={x.id}>
                                    <div className="row">

                                        <div className="col-10">{<p>"{x.quote}"</p>}
                                        {<p> - <i>{x.author}</i></p>}
                                            {<p> Submitted by: <em>{x.username} </em>in <strong>{x.category}</strong></p>}
                                        </div>
                                        <div className="col">
                                            <div onClick={this.upVote.bind(this, x.id)} className="arrow-up" id="downvoteButton"></div>
                                            <p id="votes">{"  " + x.votes}</p>
                                            <div onClick={this.downVote.bind(this, x.id)} className="arrow-down " id="upvoteButton"></div>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }




                </ul>


            </div>
        )

    }
}

export default Funny;