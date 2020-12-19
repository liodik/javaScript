export const createLogger = () => {
  const records = [];

  function warn(text) {
    return records.push({ message: text, dateTime: new Date(), type: 'warn' });
  }

  function error(text) {
    return records.push({ message: text, dateTime: new Date(), type: 'error' });
  }

  function log(text) {
    return records.push({ message: text, dateTime: new Date(), type: 'log' });
  }

  function getRecords(messageType) {
    return messageType === undefined
      ? records.sort((el1, el2) => el2.dateTime - el1.dateTime)
      : records
          .filter(el => el.type === messageType)
          .sort((el1, el2) => el2.dateTime - el1.dateTime);
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
};

const logger = createLogger();
logger.warn('User try to restricted page');
logger.error('User try  page');
logger.log('page');
console.log(logger.getRecords());

// const logger = createLogger();
// logger.log('User logged in');
// logger.warn('User try to restricted page');
// logger.log('User logged out');
// logger.error('Unexpected error on the site');
// console.log(logger.getRecords());
// logger.getRecords('log');
