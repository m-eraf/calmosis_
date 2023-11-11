import React, { useEffect } from 'react';
import axios from "axios";
import { useSearchParams } from "react-router-dom";

import Layout from '../components/Layout/Layout';

const Success = () => {
  const [params, _] = useSearchParams();

  useEffect(async () => {
    try {
      const session_id = params.get("session_id");
      await axios.get(`api/update-payment-status?sessionId=${session_id}`);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Layout>
      <div className='adasd relative top-[5vh]'>
        <div className="label">
          <img className='imaga' src="/payment.gif" alt="" />
          <div className="text-wrapper">Thanks for ordering</div>
          <p className="text-wrapperr">The doctor will contact you soon</p>

        </div>

      </div>
    </Layout>
  )
}

export default Success