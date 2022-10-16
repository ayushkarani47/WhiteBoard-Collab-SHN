import React from 'react';
import Board from '../board/Board';
import './style.scss';

class Container extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            color: "#000000",
            size: "5",
            imgFile : ''
        }
    }

    changeColor(params) {
        this.setState({
            color: params.target.value
        })
    }

    changeSize(params) {
        this.setState({
            size: params.target.value
        })}
    changeTool(params){
        this.setState({
            size: params.target.value

        })}
        changeTools(params){
            this.setState({
                color: "#aaafb6",
                size:"20"

            })
    }

    imgFileHandler(params){
        if (1) {
            this.setState({
                imgFile : URL.createObjectURL(params.target.files[0])
            })
        }
    }
    
    

    render() {

        return (
            <div className="container">
                <div class="tools-section">
                    <div className="color-picker-container">
                         Brush Color : &nbsp; 
                        <input id="selectcolor" type="color" value={this.state.color} onChange={this.changeColor.bind(this)}/>
                    </div>
                    <div className="color-picker-container">
                        eraser : &nbsp;
                        <button  onClick={this.changeTools.bind(this)}></button>
                    </div>

                    <div className="brushsize-container">
                         Brush Size : &nbsp; 
                        <select id="selectsize" value={this.state.size} onChange={this.changeSize.bind(this)}>
                            <option> 5 </option>
                            <option> 10 </option>
                            <option> 15 </option>
                            <option> 20 </option>
                            <option> 25 </option>
                            <option> 30 </option>
                        </select>
                    </div>

                    <div>
                        <input type="file" id="upload" accept = "image/*" onChange = {this.imgFileHandler.bind(this)}/>
                    </div>

                </div>

                <div class="board-container">
                       
                    <Board color={this.state.color} size={this.state.size} img = {this.state.imgFile}>
              </Board>
              
                </div>
            </div>
        )
    }
}

export default Container