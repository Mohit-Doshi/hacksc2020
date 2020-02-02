import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'components/Menu';
import JSONUploader from 'components/JSONUploader'

ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<JSONUploader />, document.getElementById('maps-json-uploader'));
