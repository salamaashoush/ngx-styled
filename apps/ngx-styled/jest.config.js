module.exports = {
  name: 'ngx-styled',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngx-styled',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
