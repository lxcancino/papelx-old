module.exports = {
  name: 'web-cxc',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/web-cxc',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
