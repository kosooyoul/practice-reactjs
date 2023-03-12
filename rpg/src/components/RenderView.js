import React, { useEffect, useRef } from 'react';

const RenderView = (props) => {
  const rootStyle = { position: 'relation', width: '100%', height: '100%', outline: 'none' };
  const canvasStyle = { width: '100%', height: '100%' };

  const canvasRef = useRef(null);
  const rendererRef = useRef(null);
  
  const keyStatus = {};

  const handleKeyDown = (event) => {
    if (keyStatus[event.which] == null) {
      keyStatus[event.which] = Date.now();
      rendererRef.current.handleKeyDown(event.which, keyStatus);
    }
  };

  const handleKeyUp = (event) => {
    if (keyStatus[event.which]) {
      delete keyStatus[event.which];
      rendererRef.current.handleKeyUp(event.which, keyStatus)
    }
  };

  const handleKeyUpAll = () => {
    const keys = Object.keys(keyStatus);
    keys.forEach(key => {
      delete keyStatus[key];
      rendererRef.current.handleKeyUp(key, keyStatus)
    })
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const renderer = new props.renderer(context);
    rendererRef.current = renderer;

    let animationFrameId;

    // 캔버스에 그림 그리기
    const render = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      renderer.render(canvas.width, canvas.height);
      animationFrameId = window.requestAnimationFrame(render);
    };

    // 애니메이션 시작
    render();

    // 컴포넌트 언마운트 시 애니메이션 종료
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      renderer.destroy();
    };
  }, [props.renderer]);

  return (
    <div onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} onBlur={handleKeyUpAll} tabIndex="1" style={rootStyle}>
      <canvas ref={canvasRef} style={canvasStyle} />
      <div></div>
    </div>
  );
};

export default RenderView;