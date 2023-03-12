import React, { useEffect, useRef } from 'react';

const RenderView = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const renderer = new props.renderer(context);

    let animationFrameId;

    // 캔버스에 그림 그리기
    const render = () => {
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

  return <canvas ref={canvasRef} width="400" height="300" />;
};

export default RenderView;