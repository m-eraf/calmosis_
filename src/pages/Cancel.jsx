import React, { useEffect } from 'react';
import axios from "axios";
import { useSearchParams } from "react-router-dom";

import Layout from '../components/Layout/Layout';

const Cancel = () => {
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
          <img className='imaga' src="/cancel.jpg" alt="" />
          <div className="text-wrapper">Your Order is Failed  </div>
          <button>Shop Now</button>
          <p className="text-wrapperr"></p>

        </div>

      </div>
    </Layout>
  )
}

export default Cancel