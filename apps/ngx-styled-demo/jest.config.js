module.exports = {
  name: 'ngx-styled-demo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngx-styled-demo',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
