module.exports = {
  name: 'ngx-styled',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ngx-styled',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
