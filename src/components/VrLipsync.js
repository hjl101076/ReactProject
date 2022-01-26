import React from 'react';
import Button from '@material-ui/core/Button';

class Hands extends React.Component {
    render() {
        return (
            <>
                <div style={{  display: 'flex' }}>
                    <img src={'/img/hand-1.jpg'} style={{ height: '50%' }} />
                    <img src={'/img/hand-1.jpg'}  style={{ height: '50%' }}/>
                    <ul>
                        <li>Contour 알고리즘을 통해 영역을 분리, 저장</li>
                        <br />
                        <li>ConvexHull 알고리즘을 이용하여 손가락 사이의 골의  좌표를 획득</li>
                        <br />
                        <li>좌표 계산을 통해 ROI(Region Of Interest)를 실행</li>
                        <br />
                    </ul>
                </div>
                <div style={{ display: 'flex' }}>
                    <img src={'/img/hand-1.jpg'}  style={{ height: '50%' }}/>
                    <img src={'/img/hand-1.jpg'}  style={{ height: '50%' }}/>
                    <ul>
                        <li>Contour 알고리즘을 통해 영역을 분리, 저장</li>
                        <br />
                        <li>ConvexHull 알고리즘을 이용하여 손가락 사이의 골의  좌표를 획득</li>
                        <br />
                        <li>좌표 계산을 통해 ROI(Region Of Interest)를 실행</li>
                        <br />
                    </ul>
                </div>
                <div style={{ display: 'flex' }}>
                    <img src={'/img/hand-1.jpg'}  style={{ height: '50%' }}/>
                    <img src={'/img/hand-1.jpg'}  style={{ height: '50%' }}/>
                    <ul>
                        <li>Contour 알고리즘을 통해 영역을 분리, 저장</li>
                        <br />
                        <li>ConvexHull 알고리즘을 이용하여 손가락 사이의 골의  좌표를 획득</li>
                        <br />
                        <li>좌표 계산을 통해 ROI(Region Of Interest)를 실행</li>
                        <br />
                    </ul>
                </div>
            </>
        );
    }
}

export default Hands;