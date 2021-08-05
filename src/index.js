import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import "./assets/style.css";
import Questionbox from './component/Questionbox';
import quizService from './quizService/indexx'
import Result from './component/Result'



class Quizbee extends Component{

    state ={
        questionBank:[]
        ,score:0
       , responses:0
    };
    getQuestions = () =>{
        quizService().then(question => {
            this.setState({
                questionBank:question
            });
        });
    };
    computeAnswer =(answer,correctanswer) =>{
        console.log(answer,correctanswer)
    if(answer===correctanswer){
        this.setState({score: this.state.score+1
        });
    }
    this.setState({
        responses: this.state.responses< 5?this.state.responses +1 : 5
    });

    };
    playagain =()=>{
        this.getQuestions();
        this.setState({
            score:0
           , responses:0
        });
    };
    componentDidMount(){
        this.getQuestions();
    }
    render(){
        console.log(this.state.score,this.state.responses)
        return(
            <div className="container">
                <div className="title">quizbee
                </div>
                {this.state.questionBank.length > 0 &&
                this.state.questionBank.map(
                    ({question,answers,correct,questionId})=>(
                        <Questionbox 
                        question={question}
                        options={answers}
                        key={questionId}
                        selected={answer => this.computeAnswer(answer,correct)}
                        />
                    )
                )}
                {this.state.responses === 5?(<Result score={this.state.sccore} playagain={this.playagain}/> )
                :null}
            </div>
        );
    };

};
ReactDOM.render(<Quizbee />, document.getElementById("root"));


