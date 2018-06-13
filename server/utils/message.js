var generateMessage = (from, text)=>{
  return {
    from,
    text,
    createdAt: new Date().getTime()
  };
};


var generateLocationMessage = (from, langitude, longitude)=>{
  return{
    from,
    url: `https://www.google.com/maps?=${langitude},${longitude}`,
    createdAt: new Date().getTime()
  };
};

module.exports = {generateMessage,generateLocationMessage};
