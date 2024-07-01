import React, { useState } from 'react';
import Header from '../components/header/head';
import Sider from '../components/sider';
import data from '../data.json'
import QuestionItem from '../components/question';


export default function QuestionSpace() {
    const [questions, setQuestions] = useState([]);
    const questionData = Object.values(data.eventInfo.questions)

    const handleSubmitQuestion = (e) => {
        e.preventDefault();
        const newQuestion = e.target.question.value;
        if (newQuestion.trim() !== '') {
            setQuestions([...questions, { id: questions.length + 1, text: newQuestion }]);
            e.target.reset();
        }
    };

    return (
        <div className="questionSpace">
            <Header />
            <div className="body">
                <Sider />
                <div className="main">
                    <div>
                        <h2 className='questions-title'>Espace des Questions</h2>
                        <div>
                            <div>
                                {
                                    questionData.map((question, index) => {
                                        <QuestionItem
                                            key={index}
                                            item={question.question}
                                        />
                                    })
                                }
                            </div>
                            <form onSubmit={handleSubmitQuestion}>
                                <input type="text" name="question" placeholder="Posez une question..." required />
                                <button type="submit">Poser</button>
                            </form>
                        </div>
                        <div>
                            {questions.map((question) => (
                                <div key={question.id}>
                                    <p>{question.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
