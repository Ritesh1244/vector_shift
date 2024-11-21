// commonNode.js

import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

const CommonNode = ({ id, data, nodeType, contentLabel, children }) => {
  const [currName, setCurrName] = useState(data?.name || id.replace(`custom${nodeType}-`, `${nodeType.toLowerCase()}_`));
  const [nodeTypeSelection, setNodeTypeSelection] = useState(data?.type || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setNodeTypeSelection(e.target.value);
  };

  return (
    <div style={{ width: 200, height: 100, border: '1px solid black', padding: '10px' }}>
      <div>
        <span>{contentLabel}</span>
      </div>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Type:
          <select value={nodeTypeSelection} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      {children}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
      />
    </div>
  );
};

export default CommonNode;
