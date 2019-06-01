/**
 * Rendering CV PDF by using React
 * @flow
 */

import React from 'react';
import ReactPDF from '@react-pdf/renderer';

import CV from './CV';
export default CV;

if (process.env.BABEL_ENV === 'node') {
  ReactPDF.render(
    <CV />,
    `${__dirname}/../../static/CV-Alexander-Zubko-iOS-Android-ReactNative.pdf`,
  );
}
