'use client';

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import styles from './Contact.module.css';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Message sent! We'll get back to you shortly.");
    reset();
  };

  return (
    <section id="contact" className={`${styles.contactSection} section`}>
      <div className="container">
        <div className={styles.wrapper}>
          <motion.div 
            className={styles.infoContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start Your Adventure?</h2>
            <p>
              Have questions or ready to book? proper certified guides are ready to take you 
              on the experience of a lifetime. Get in touch with us today.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: 'rgba(255,107,0,0.1)', padding: '20px', borderRadius: '8px', borderLeft: '4px solid var(--accent-color)' }}>
                <strong style={{ display: 'block', marginBottom: '4px', color: 'var(--accent-color)' }}>Safe & Certified</strong>
                <span style={{ color: 'var(--text-secondary)' }}>All our guides are NOLS certified with 10+ years experience.</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.formContainer}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  id="name" 
                  className={styles.input} 
                  placeholder=" " 
                  {...register('name', { required: 'Name is required' })}
                />
                <label htmlFor="name" className={styles.label}>Full Name</label>
                {errors.name && <span className={styles.error}>{errors.name.message}</span>}
              </div>

              <div className={styles.inputGroup}>
                <input 
                  type="email" 
                  id="email" 
                  className={styles.input} 
                  placeholder=" " 
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                <label htmlFor="email" className={styles.label}>Email Address</label>
                {errors.email && <span className={styles.error}>{errors.email.message}</span>}
              </div>

              <div className={styles.inputGroup}>
                <input 
                  type="tel" 
                  id="phone" 
                  className={styles.input} 
                  placeholder=" " 
                  {...register('phone', { required: 'Phone number is required' })}
                />
                <label htmlFor="phone" className={styles.label}>Phone Number</label>
                {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
              </div>

              <div className={styles.inputGroup}>
                <textarea 
                  id="message" 
                  className={styles.input} 
                  placeholder=" " 
                  rows={4}
                  style={{ resize: 'none' }}
                  {...register('message', { required: 'Please tell us what you need' })}
                />
                <label htmlFor="message" className={styles.label}>Your Message / Package Interest</label>
                {errors.message && <span className={styles.error}>{errors.message.message}</span>}
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%' }} 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'} <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
