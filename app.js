const express = require('express')
const axios = require('axios');
const history = require('connect-history-api-fallback');
const path = require('path');

const commonCodesStore = require('./src/commonCodesStore');
const addressCodesStore = require('./src/addressCodesStore');
const jobListStore = require('./src/jobListStore');

const app = express()
const port = 3000

app.use(history());
app.use(express.static('public'));

app.get('/api/jobList', (req, res) => {
  res.json(jobListStore.state);
});

app.get('/api/jobDetail', async (req, res) => {
  // console.log('##1', Object.keys(req));
  // // 성공(개발중엔 사용안하도록)
  const { data } = await axios.get(
    'https://job.denall.com/api/dnj/hire-announce/get',
    {
      params: req.query,
    }
  );
  //   res.json(data);
  res.json(_detailDummy);
});

app.get('/api/commonCodes', (req, res) => {
  res.json(commonCodesStore.state);
});

app.get('/api/addressCodes', (req, res) => {
  res.json(addressCodesStore.state);
});

app.get('/*', async ({ url }, res) => {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


const _detailDummy = {
  data: {
    rowStatus: '',
    businessmanCustomerCode: '71572',
    hireAnnounceSequenceNumber: 1,
    hireAnnounceName: '대구 달서구 월성동 치과진료실 스텝 구인합니다',
    recruitStartDate: '2024-03-15',
    recruitEndDate: '2026-03-15',
    ordinaryTimeRecruitYesOrNo: 'Y',
    hireAnnounceStatCode: 'HIRE_ANUN_STACD_100',
    recruitContent:
      '<p>대구 달서구 월성동소재 치과입니다.</p><p>진료실 보조해주실 스텝 두분 모십니다.</p><p>진료시간</p><p>월~금 : 오전10시~오후7시 (실제7시보단 일찍퇴근함)</p><p>   토    : 오전10시~오후2시</p><p>점심시간 : 12시30분~2시</p><p>월 반차 있음.</p><p>문의는 문자로 남겨주시거나 병원으로 전화주시기 바랍니다.</p><p>010-9152-7169</p><p>053-644-2754</p><p><br></p>',
    topPostingNumberOfTimes: 0,
    nonMemberReadNumberOfTimes: 0,
    deleteYesOrNo: 'N',
    reAnnounceNumberOfTimes: 0,
    openedHospitalYear: '2011',
    staffCount: 0,
    hireChargePersonName: '김창희',
    hireChargePersonJobDutyName: '',
    hireChargePersonTelephoneNumber: '010-9162-7169',
    hireChargePersonEmail: 'kimdent1999@gmail.com',
    sigunguCode: '290',
    sidoCode: '27',
    latitudeValue: 35.8316156,
    longitudeValue: 128.5307753,
    customerTelephoneNumber: '0536442754',
    customerName: '김창희치과',
    businessItemsName: '치과병원',
    businessTypeName: '보건업',
    baseAddress: '대구광역시 달서구 월성로 42',
    detailStreetAddress: ' 센트로밸리 204호  (월성동)',
    customerRepresentName: '김창희',
    hireAnnouncePostingDtm: '2024-03-15 09:29:08',
    hireReadCount: 1,
    qualificationCode:
      'QLF_CD_001|QLF_CD_001|QLF_CD_001|QLF_CD_002|QLF_CD_002|QLF_CD_002|QLF_CD_003|QLF_CD_003|QLF_CD_003',
    jobOfferConditionDivisionCode:
      'CORDNT_CD|SGG_CD|SIDO_CD|CORDNT_CD|SGG_CD|SIDO_CD|CORDNT_CD|SGG_CD|SIDO_CD',
    jobOfferConditionConfigureCode:
      'CORDNT_CD|290|27|CORDNT_CD|290|27|CORDNT_CD|290|27',
    personalCount: '2|2|2|2|2|2|2|2|2',
    fileList: [],
    jobConditionList: [
      {
        rowStatus: '',
        businessmanCustomerCode: '71572',
        hireAnnounceSequenceNumber: 1,
        qualificationCode: 'QLF_CD_001',
        personnelCount: 2,
        deleteYesOrNo: 'N',
        lastUpdateDayAndTime: '2024-03-15 09:29:08.012448',
        jobOfferConditionDetailList: [
          {
            rowStatus: '',
            businessmanCustomerCode: '71572',
            hireAnnounceSequenceNumber: 1,
            qualificationCode: 'QLF_CD_001',
            jobOfferConditionDivisionCode: 'CORDNT_CD',
            searchConditionYesOrNo: 'Y',
            jobOfferConditionConfigureCode: 'CORDNT_CD',
            latitudeValue: 35.8316156,
            longitudeValue: 128.5307753,
            jobOfferConditionDetailList: [],
          },
          {
            rowStatus: '',
            businessmanCustomerCode: '71572',
            hireAnnounceSequenceNumber: 1,
            qualificationCode: 'QLF_CD_001',
            jobOfferConditionDivisionCode: 'SGG_CD',
            searchConditionYesOrNo: 'Y',
            jobOfferConditionConfigureCode: '290',
            jobOfferConditionDetailList: [],
          },
          {
            rowStatus: '',
            businessmanCustomerCode: '71572',
            hireAnnounceSequenceNumber: 1,
            qualificationCode: 'QLF_CD_001',
            jobOfferConditionDivisionCode: 'SIDO_CD',
            searchConditionYesOrNo: 'Y',
            jobOfferConditionConfigureCode: '27',
            jobOfferConditionDetailList: [],
          },
        ],
      },
      {
        rowStatus: '',
        businessmanCustomerCode: '71572',
        hireAnnounceSequenceNumber: 1,
        qualificationCode: 'QLF_CD_002',
        personnelCount: 2,
        deleteYesOrNo: 'N',
        lastUpdateDayAndTime: '2024-03-15 09:29:08.012448',
        jobOfferConditionDetailList: [
          {
            rowStatus: '',
            businessmanCustomerCode: '71572',
            hireAnnounceSequenceNumber: 1,
            qualificationCode: 'QLF_CD_002',
            jobOfferConditionDivisionCode: 'CORDNT_CD',
            searchConditionYesOrNo: 'Y',
            jobOfferConditionConfigureCode: 'CORDNT_CD',
            latitudeValue: 35.8316156,
            longitudeValue: 128.5307753,
            jobOfferConditionDetailList: [],
          },
          {
            rowStatus: '',
            businessmanCustomerCode: '71572',
            hireAnnounceSequenceNumber: 1,
            qualificationCode: 'QLF_CD_002',
            jobOfferConditionDivisionCode: 'SGG_CD',
            searchConditionYesOrNo: 'Y',
            jobOfferConditionConfigureCode: '290',
            jobOfferConditionDetailList: [],
          },
          {
            rowStatus: '',
            businessmanCustomerCode: '71572',
            hireAnnounceSequenceNumber: 1,
            qualificationCode: 'QLF_CD_002',
            jobOfferConditionDivisionCode: 'SIDO_CD',
            searchConditionYesOrNo: 'Y',
            jobOfferConditionConfigureCode: '27',
            jobOfferConditionDetailList: [],
          },
        ],
      },
      {
        rowStatus: '',
        businessmanCustomerCode: '71572',
        hireAnnounceSequenceNumber: 1,
        qualificationCode: 'QLF_CD_003',
        personnelCount: 2,
        deleteYesOrNo: 'N',
        lastUpdateDayAndTime: '2024-03-15 09:29:08.012448',
        jobOfferConditionDetailList: [
          {
            rowStatus: '',
            businessmanCustomerCode: '71572',
            hireAnnounceSequenceNumber: 1,
            qualificationCode: 'QLF_CD_003',
            jobOfferConditionDivisionCode: 'CORDNT_CD',
            searchConditionYesOrNo: 'Y',
            jobOfferConditionConfigureCode: 'CORDNT_CD',
            latitudeValue: 35.8316156,
            longitudeValue: 128.5307753,
            jobOfferConditionDetailList: [],
          },
          {
            rowStatus: '',
            businessmanCustomerCode: '71572',
            hireAnnounceSequenceNumber: 1,
            qualificationCode: 'QLF_CD_003',
            jobOfferConditionDivisionCode: 'SGG_CD',
            searchConditionYesOrNo: 'Y',
            jobOfferConditionConfigureCode: '290',
            jobOfferConditionDetailList: [],
          },
          {
            rowStatus: '',
            businessmanCustomerCode: '71572',
            hireAnnounceSequenceNumber: 1,
            qualificationCode: 'QLF_CD_003',
            jobOfferConditionDivisionCode: 'SIDO_CD',
            searchConditionYesOrNo: 'Y',
            jobOfferConditionConfigureCode: '27',
            jobOfferConditionDetailList: [],
          },
        ],
      },
    ],
    medicalTreatmentList: [],
    isIndividual: false,
    isOpenBannerList: 'N',
    isLogin: 'N',
    hireProgressCount: 0,
    hireEnterRequestCount: 0,
    statistics: {
      rowStatus: '',
      hireReadCount: 0,
      matchCount: 0,
    },
  },
  status: 200,
  code: 'OK',
  message: 'Success',
  timestamp: 1711412485215,
};
