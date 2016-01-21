import React from 'react';

let PROFILE_URL = 'http://www.freecodecamp.com/';

function camperData (camper,index) {
  let URL = `${PROFILE_URL}${camper.username}`;
    return (
      <tr key={camper.username}>
        <td className='rank-td'>{index+1}</td>
        <td className='image-td'>
            <a href={URL}><img className="responsive-img z-depth-2 camperImage" src={camper.img} /></a>
        </td>
        <td className='username-td'><a href={URL}>{camper.username}</a></td>
        <td className='thirtyscore-td'><div className='30Score'>{camper.recent}</div></td>
        <td className='allscore-td'><div className='allScore'>{camper.alltime}</div></td>
      </tr>
    );
}

export default (props = []) => {
  switch(props.viewMode){
    case '30':
      let returnData = props.campers30.map(camperData);
      return(
        <tbody className='camperTableBody'>
          {props.campers30.map(camperData)}
        </tbody>
      );
    case 'all':
      return(
        <tbody className='camperTableBody'>
          {props.campersAll.map(camperData)}
        </tbody>
      );
  }
}
