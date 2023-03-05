import "./App.scss";
import React from "react";
import { Stage, Layer, Star } from "react-konva";
import type { KonvaEventObject, NodeConfig } from "konva/lib/Node";

interface Config {
  conf: NodeConfig;
  isDragging: boolean;
}

function generateShapes(): Config[] {
  return [...Array(10)].map((_, i) => {
    const config = {
      id: i.toString(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      rotation: Math.random() * 180,
    };
    return ({
    conf: config,
    isDragging: false,
    });
  });
}

const INITIAL_STATE = generateShapes();

function App(): JSX.Element {
  const [stars, setStars] = React.useState(INITIAL_STATE);
  const handleDragStart = (e: KonvaEventObject<DragEvent>): void => {
    const id = e.target.id();
    setStars(
      stars.map((star: Config) => {
        return {
          ...star,
          isDragging: star.conf.id === id,
        };
      })
    );
  };
  const handleDragEnd = (_: KonvaEventObject<DragEvent>): void => {
    setStars(
      stars.map((star: Config) => {
        return {
          ...star,
          isDragging: false,
        };
      })
    );
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {stars.map((star: Config) => (
          <Star
            key={star.conf.id}
            id={star.conf.id}
            x={star.conf.x}
            y={star.conf.y}
            numPoints={5}
            innerRadius={20}
            outerRadius={40}
            fill="#89b717"
            opacity={0.8}
            draggable
            rotation={star.conf.rotation}
            shadowColor="black"
            shadowBlur={10}
            shadowOpacity={0.6}
            shadowOffsetX={star.isDragging ? 10 : 5}
            shadowOffsetY={star.isDragging ? 10 : 5}
            scaleX={star.isDragging ? 1.2 : 1}
            scaleY={star.isDragging ? 1.2 : 1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        ))}
      </Layer>
    </Stage>
  );
}

export default App;
