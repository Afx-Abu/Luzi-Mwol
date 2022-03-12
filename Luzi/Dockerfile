FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Afx-Abu/Luzi-Mwol /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/Afx-Abu/uploads

CMD ["node", "bot.js"]
