exports.envelope = {
  "interchangeHeader": {
    "senderQualifier": "ZZ",
    "senderId": "ME",
    "receiverQualifier": "ZZ",
    "receiverId": "YOU",
    "date": "2022-08-15",
    "time": "13:20",
    "usageIndicatorCode": "P",
    "controlNumber": "12"
  },
  "groupHeader": {
    "functionalIdentifierCode": "PO",
    "applicationSenderCode": "ME",
    "applicationReceiverCode": "YOUR DEPT",
    "date": "2022-08-15",
    "time": "13:20:52",
    "controlNumber": "1"
  }
}

exports.data = [
  {
    "heading": {
      "transaction_set_header_ST": {
        "transaction_set_identifier_code_01": "837",
        "transaction_set_control_number_02": 1,
        "implementation_guide_version_name_03": "005010X222A1"
      },
      "beginning_of_hierarchical_transaction_BHT": {
        "hierarchical_structure_code_01": "0019",
        "transaction_set_purpose_code_02": "00",
        "originator_application_transaction_identifier_03": "XXXX",
        "transaction_set_creation_date_04": "2023-06-27",
        "transaction_set_creation_time_05": "05:05",
        "claim_or_encounter_identifier_06": "31"
      },
      "submitter_name_NM1_loop": {
        "submitter_name_NM1": {
          "entity_identifier_code_01": "41",
          "entity_type_qualifier_02": "2",
          "submitter_last_or_organization_name_03": "Goolesivile",
          "submitter_first_name_04": "Sonny",
          "submitter_middle_name_or_initial_05": "Chevvy",
          "identification_code_qualifier_08": "46",
          "submitter_identifier_09": "XXX"
        },
        "submitter_edi_contact_information_PER": [
          {
            "contact_function_code_01": "IC",
            "submitter_contact_name_02": "Rosalie Gomez",
            "communication_number_qualifier_03": "EM",
            "communication_number_04": "XX",
            "communication_number_qualifier_05": "TE",
            "communication_number_06": "XXXXX",
            "communication_number_qualifier_07": "EM",
            "communication_number_08": "XXXXX"
          }
        ]
      },
      "receiver_name_NM1_loop": {
        "receiver_name_NM1": {
          "entity_identifier_code_01": "40",
          "entity_type_qualifier_02": "2",
          "receiver_name_03": "X",
          "identification_code_qualifier_08": "46",
          "receiver_primary_identifier_09": "XXXX"
        }
      }
    },
    "detail": {
      "billing_provider_hierarchical_level_HL_loop": [
        {
          "billing_provider_specialty_information_PRV": {
            "provider_code_01": "BI",
            "reference_identification_qualifier_02": "PXC",
            "provider_taxonomy_code_03": "MEDICAID"
          },
          "foreign_currency_information_CUR": {
            "entity_identifier_code_01": "85",
            "currency_code_02": "XXX"
          },
          "pay_to_plan_name_NM1_loop": {
            "pay_to_plan_name_NM1": {
              "entity_identifier_code_01": "PE",
              "entity_type_qualifier_02": "2",
              "pay_to_plan_organizational_name_03": "XXX",
              "identification_code_qualifier_08": "PI",
              "pay_to_plan_primary_identifier_09": "XXXX"
            },
            "pay_to_plan_address_N3": {
              "pay_to_plan_address_line_01": "XX",
              "pay_to_plan_address_line_02": "XXXXXX"
            },
            "pay_to_plan_city_state_zip_code_N4": {
              "pay_to_plan_city_name_01": "XXXXX",
              "pay_to_plan_state_or_province_code_02": "XX",
              "pay_to_plan_postal_zone_or_zip_code_03": "XXXX",
              "country_code_04": "XX"
            },
            "pay_to_plan_tax_identification_number_REF": {
              "reference_identification_qualifier_01": "EI",
              "pay_to_plan_tax_identification_number_02": "XXX"
            },
            "pay_to_plan_secondary_identification_REF": {
              "reference_identification_qualifier_01": "2U",
              "pay_to_plan_secondary_identifier_02": "X"
            }
          },
          "billing_provider_name_NM1_loop": {
            "billing_provider_name_NM1": {
              "entity_identifier_code_01": "85",
              "entity_type_qualifier_02": "1",
              "billing_provider_last_or_organizational_name_03": "XXX",
              "billing_provider_first_name_04": "XXXXXX",
              "billing_provider_middle_name_or_initial_05": "XXXXXX",
              "billing_provider_name_suffix_07": "XX",
              "identification_code_qualifier_08": "XX",
              "billing_provider_identifier_09": "XXX"
            },
            "billing_provider_address_N3": {
              "billing_provider_address_line_01": "XXXXX",
              "billing_provider_address_line_02": "XXX"
            },
            "billing_provider_city_state_zip_code_N4": {
              "billing_provider_city_name_01": "XXXXXX",
              "billing_provider_state_or_province_code_02": "XX",
              "billing_provider_postal_zone_or_zip_code_03": "XXXX",
              "country_code_04": "XXX"
            },
            "billing_provider_tax_identification_REF": {
              "reference_identification_qualifier_01": "EI",
              "billing_provider_tax_identification_number_02": "XXXXXX"
            },
            "billing_provider_upin_license_information_REF": [
              {
                "reference_identification_qualifier_01": "0B",
                "billing_provider_license_and_or_upin_information_02": "XX"
              }
            ],
            "billing_provider_contact_information_PER": [
              {
                "contact_function_code_01": "IC",
                "billing_provider_contact_name_02": "XXXXXX",
                "communication_number_qualifier_03": "FX",
                "communication_number_04": "XX",
                "communication_number_qualifier_05": "FX",
                "communication_number_06": "XX",
                "communication_number_qualifier_07": "TE",
                "communication_number_08": "XXXXXX"
              }
            ]
          },
          "pay_to_address_name_NM1_loop": {
            "pay_to_address_name_NM1": {
              "entity_identifier_code_01": "87",
              "entity_type_qualifier_02": "2"
            },
            "pay_to_address_address_N3": {
              "pay_to_address_line_01": "100 Clown Avenue",
              "pay_to_address_line_02": "XX"
            },
            "pay_to_address_city_state_zip_code_N4": {
              "pay_to_address_city_name_01": "Nevada",
              "pay_to_address_state_code_02": "CA",
              "pay_to_address_postal_zone_or_zip_code_03": "82801",
              "country_code_04": "+02"
            }
          },
          "subscriber_hierarchical_level_HL_loop": [
            {
              "subscriber_information_SBR": {
                "payer_responsibility_sequence_number_code_01": "P",
                "individual_relationship_code_02": "18",
                "subscriber_group_or_policy_number_03": "X",
                "subscriber_group_name_04": "XXXXX",
                "insurance_type_code_05": "43",
                "claim_filing_indicator_code_09": "MA"
              },
              "patient_information_PAT": {
                "date_time_period_format_qualifier_05": "D8",
                "patient_death_date_06": "XXXXXX",
                "unit_or_basis_for_measurement_code_07": "01",
                "patient_weight_08": 0,
                "pregnancy_indicator_09": "Y"
              },
              "subscriber_name_NM1_loop": {
                "subscriber_name_NM1": {
                  "entity_identifier_code_01": "IL",
                  "entity_type_qualifier_02": "2",
                  "subscriber_last_name_03": "XX",
                  "subscriber_first_name_04": "Madonna",
                  "subscriber_middle_name_or_initial_05": "XXX",
                  "subscriber_name_suffix_07": "Ganbhootin",
                  "identification_code_qualifier_08": "II",
                  "subscriber_primary_identifier_09": "XXXXXX"
                },
                "subscriber_address_N3": {
                  "subscriber_address_line_01": "100 Clown Avenue",
                  "subscriber_address_line_02": "XXXXXX"
                },
                "subscriber_city_state_zip_code_N4": {
                  "subscriber_city_name_01": "Nevada",
                  "subscriber_state_code_02": "LA",
                  "subscriber_postal_zone_or_zip_code_03": "82801",
                  "country_code_04": "+02"
                },
                "subscriber_demographic_information_DMG": {
                  "date_time_period_format_qualifier_01": "D8",
                  "subscriber_birth_date_02": "XXXX",
                  "subscriber_gender_code_03": "M"
                },
                "subscriber_secondary_identification_REF": {
                  "reference_identification_qualifier_01": "SY",
                  "subscriber_supplemental_identifier_02": "XXXXXX"
                },
                "property_and_casualty_claim_number_REF": {
                  "reference_identification_qualifier_01": "Y4",
                  "property_casualty_claim_number_02": "XXXX"
                },
                "property_and_casualty_subscriber_contact_information_PER": {
                  "contact_function_code_01": "IC",
                  "name_02": "XXXX",
                  "communication_number_qualifier_03": "TE",
                  "communication_number_04": "XXXX",
                  "communication_number_qualifier_05": "EX",
                  "communication_number_06": "XXXX"
                }
              },
              "payer_name_NM1_loop": {
                "payer_name_NM1": {
                  "entity_identifier_code_01": "PR",
                  "entity_type_qualifier_02": "2",
                  "payer_name_03": "XXXX",
                  "identification_code_qualifier_08": "PI",
                  "payer_identifier_09": "XXXXXX"
                },
                "payer_address_N3": {
                  "payer_address_line_01": "X",
                  "payer_address_line_02": "XXXX"
                },
                "payer_city_state_zip_code_N4": {
                  "payer_city_name_01": "XXXXX",
                  "payer_state_or_province_code_02": "XX",
                  "payer_postal_zone_or_zip_code_03": "XXXXXXX",
                  "country_code_04": "XX"
                },
                "payer_secondary_identification_REF": [
                  {
                    "reference_identification_qualifier_01": "FY",
                    "payer_secondary_identifier_02": "XX"
                  }
                ],
                "billing_provider_secondary_identification_REF": [
                  {
                    "reference_identification_qualifier_01": "LU",
                    "billing_provider_secondary_identifier_02": "XXXX"
                  }
                ]
              },
              "claim_information_CLM_loop": [
                {
                  "claim_information_CLM": {
                    "patient_control_number_01": "XX",
                    "total_claim_charge_amount_02": 0,
                    "health_care_service_location_information_05": {
                      "place_of_service_code_01": "XX",
                      "facility_code_qualifier_02": "B",
                      "claim_frequency_code_03": "X"
                    },
                    "provider_or_supplier_signature_indicator_06": "N",
                    "assignment_or_plan_participation_code_07": "A",
                    "benefits_assignment_certification_indicator_08": "N",
                    "release_of_information_code_09": "Y",
                    "patient_signature_source_code_10": "P",
                    "related_causes_information_11": {
                      "related_causes_code_01": "AA",
                      "related_causes_code_02": "XXX",
                      "auto_accident_state_or_province_code_04": "XX"
                    },
                    "special_program_indicator_12": "03",
                    "delay_reason_code_20": "8"
                  },
                  "date_onset_of_current_illness_or_symptom_DTP": {
                    "date_time_qualifier_01": "431",
                    "date_time_period_format_qualifier_02": "D8",
                    "onset_of_current_illness_or_injury_date_03": "XXXXXX"
                  },
                  "date_discharge_DTP": {
                    "date_time_qualifier_01": "096",
                    "date_time_period_format_qualifier_02": "D8",
                    "related_hospitalization_discharge_date_03": "XXX"
                  },
                  "date_last_seen_date_DTP": {
                    "date_time_qualifier_01": "304",
                    "date_time_period_format_qualifier_02": "D8",
                    "last_seen_date_03": "XXXX"
                  },
                  "date_hearing_and_vision_prescription_date_DTP": {
                    "date_time_qualifier_01": "471",
                    "date_time_period_format_qualifier_02": "D8",
                    "prescription_date_03": "XXX"
                  },
                  "date_admission_DTP": {
                    "date_time_qualifier_01": "435",
                    "date_time_period_format_qualifier_02": "D8",
                    "related_hospitalization_admission_date_03": "XXXXX"
                  },
                  "date_property_and_casualty_date_of_first_contact_DTP": {
                    "date_time_qualifier_01": "444",
                    "date_time_period_format_qualifier_02": "D8",
                    "date_time_period_03": "X"
                  },
                  "date_repricer_received_date_DTP": {
                    "date_time_qualifier_01": "050",
                    "date_time_period_format_qualifier_02": "D8",
                    "repricer_received_date_03": "XXXXX"
                  },
                  "date_initial_treatment_date_DTP": {
                    "date_time_qualifier_01": "454",
                    "date_time_period_format_qualifier_02": "D8",
                    "initial_treatment_date_03": "XXXXXX"
                  },
                  "date_accident_DTP": {
                    "date_time_qualifier_01": "439",
                    "date_time_period_format_qualifier_02": "D8",
                    "accident_date_03": "XXXX"
                  },
                  "date_acute_manifestation_DTP": {
                    "date_time_qualifier_01": "453",
                    "date_time_period_format_qualifier_02": "D8",
                    "acute_manifestation_date_03": "XXXX"
                  },
                  "date_assumed_and_relinquished_care_dates_DTP": [
                    {
                      "date_time_qualifier_01": "090",
                      "date_time_period_format_qualifier_02": "D8",
                      "assumed_or_relinquished_care_date_03": "XXXX"
                    }
                  ],
                  "date_last_menstrual_period_DTP": {
                    "date_time_qualifier_01": "484",
                    "date_time_period_format_qualifier_02": "D8",
                    "last_menstrual_period_date_03": "XX"
                  },
                  "date_last_x_ray_date_DTP": {
                    "date_time_qualifier_01": "455",
                    "date_time_period_format_qualifier_02": "D8",
                    "last_x_ray_date_03": "XXXX"
                  },
                  "date_last_worked_DTP": {
                    "date_time_qualifier_01": "297",
                    "date_time_period_format_qualifier_02": "D8",
                    "last_worked_date_03": "XXXX"
                  },
                  "date_authorized_return_to_work_DTP": {
                    "date_time_qualifier_01": "296",
                    "date_time_period_format_qualifier_02": "D8",
                    "work_return_date_03": "XXXXX"
                  },
                  "date_disability_dates_DTP": {
                    "date_time_qualifier_01": "314",
                    "date_time_period_format_qualifier_02": "RD8",
                    "disability_from_date_03": "XXXXXX"
                  },
                  "claim_supplemental_information_PWK": [
                    {
                      "attachment_report_type_code_01": "RR",
                      "attachment_transmission_code_02": "FT",
                      "identification_code_qualifier_05": "AC",
                      "attachment_control_number_06": "XX"
                    }
                  ],
                  "contract_information_CN1": {
                    "contract_type_code_01": "05",
                    "contract_amount_02": 0,
                    "contract_percentage_03": 0,
                    "contract_code_04": "XXXX",
                    "terms_discount_percentage_05": 0,
                    "contract_version_identifier_06": "XXX"
                  },
                  "patient_amount_paid_AMT": {
                    "amount_qualifier_code_01": "F5",
                    "patient_amount_paid_02": 0
                  },
                  "referral_number_REF": {
                    "reference_identification_qualifier_01": "9F",
                    "referral_number_02": "XX"
                  },
                  "medical_record_number_REF": {
                    "reference_identification_qualifier_01": "EA",
                    "medical_record_number_02": "XXX"
                  },
                  "mandatory_medicare_section_4081_crossover_indicator_REF": {
                    "reference_identification_qualifier_01": "F5",
                    "medicare_section_4081_indicator_02": "XXXXX"
                  },
                  "demonstration_project_identifier_REF": {
                    "reference_identification_qualifier_01": "P4",
                    "demonstration_project_identifier_02": "XX"
                  },
                  "care_plan_oversight_REF": {
                    "reference_identification_qualifier_01": "1J",
                    "care_plan_oversight_number_02": "XX"
                  },
                  "prior_authorization_REF": {
                    "reference_identification_qualifier_01": "G1",
                    "prior_authorization_number_02": "XXX"
                  },
                  "service_authorization_exception_code_REF": {
                    "reference_identification_qualifier_01": "4N",
                    "service_authorization_exception_code_02": "XXXXXX"
                  },
                  "payer_claim_control_number_REF": {
                    "reference_identification_qualifier_01": "F8",
                    "payer_claim_control_number_02": "XXXX"
                  },
                  "clinical_laboratory_improvement_amendment_clia_number_REF": {
                    "reference_identification_qualifier_01": "X4",
                    "clinical_laboratory_improvement_amendment_number_02": "XX"
                  },
                  "adjusted_repriced_claim_number_REF": {
                    "reference_identification_qualifier_01": "9C",
                    "adjusted_repriced_claim_reference_number_02": "XXXXX"
                  },
                  "investigational_device_exemption_number_REF": {
                    "reference_identification_qualifier_01": "LX",
                    "investigational_device_exemption_identifier_02": "X"
                  },
                  "claim_identifier_for_transmission_intermediaries_REF": {
                    "reference_identification_qualifier_01": "D9",
                    "value_added_network_trace_number_02": "XX"
                  },
                  "mammography_certification_number_REF": {
                    "reference_identification_qualifier_01": "EW",
                    "mammography_certification_number_02": "X"
                  },
                  "repriced_claim_number_REF": {
                    "reference_identification_qualifier_01": "9A",
                    "repriced_claim_reference_number_02": "XXX"
                  },
                  "file_information_K3": [
                    {
                      "fixed_format_information_01": "X"
                    }
                  ],
                  "claim_note_NTE": {
                    "note_reference_code_01": "TPO",
                    "claim_note_text_02": "XXXX"
                  },
                  "ambulance_transport_information_CR1": {
                    "unit_or_basis_for_measurement_code_01": "LB",
                    "patient_weight_02": 0,
                    "ambulance_transport_reason_code_04": "E",
                    "unit_or_basis_for_measurement_code_05": "DH",
                    "transport_distance_06": 0,
                    "round_trip_purpose_description_09": "XXX",
                    "stretcher_purpose_description_10": "XXXXXX"
                  },
                  "spinal_manipulation_service_information_CR2": {
                    "patient_condition_code_08": "G",
                    "patient_condition_description_10": "XXXXXX",
                    "patient_condition_description_11": "XX"
                  },
                  "patient_condition_information_vision_CRC": [
                    {
                      "code_category_01": "E1",
                      "certification_condition_indicator_02": "N",
                      "condition_code_03": "L1",
                      "condition_code_04": "XXX",
                      "condition_code_05": "XX",
                      "condition_code_06": "XX",
                      "condition_code_07": "XX"
                    }
                  ],
                  "epsdt_referral_CRC": {
                    "code_qualifier_01": "ZZ",
                    "certification_condition_code_applies_indicator_02": "Y",
                    "condition_indicator_03": "ST",
                    "condition_indicator_04": "XX",
                    "condition_indicator_05": "XXX"
                  },
                  "homebound_indicator_CRC": {
                    "code_category_01": "75",
                    "certification_condition_indicator_02": "Y",
                    "homebound_indicator_03": "IH"
                  },
                  "ambulance_certification_CRC": [
                    {
                      "code_category_01": "07",
                      "certification_condition_indicator_02": "Y",
                      "condition_code_03": "12",
                      "condition_code_04": "XXX",
                      "condition_code_05": "XX",
                      "condition_code_06": "XX",
                      "condition_code_07": "XXX"
                    }
                  ],
                  "condition_information_HI": [
                    {
                      "health_care_code_information_01": {
                        "code_list_qualifier_code_01": "BG",
                        "condition_code_02": "X"
                      },
                      "health_care_code_information_02": {
                        "code_list_qualifier_code_01": "BG",
                        "condition_code_02": "XXXXX"
                      },
                      "health_care_code_information_03": {
                        "code_list_qualifier_code_01": "BG",
                        "condition_code_02": "X"
                      },
                      "health_care_code_information_04": {
                        "code_list_qualifier_code_01": "BG",
                        "condition_code_02": "XXXXX"
                      },
                      "health_care_code_information_05": {
                        "code_list_qualifier_code_01": "BG",
                        "condition_code_02": "XXXX"
                      },
                      "health_care_code_information_06": {
                        "code_list_qualifier_code_01": "BG",
                        "condition_code_02": "XXXXX"
                      },
                      "health_care_code_information_07": {
                        "code_list_qualifier_code_01": "BG",
                        "condition_code_02": "XX"
                      },
                      "health_care_code_information_08": {
                        "code_list_qualifier_code_01": "BG",
                        "condition_code_02": "XXXX"
                      },
                      "health_care_code_information_09": {
                        "code_list_qualifier_code_01": "BG",
                        "condition_code_02": "XXXXXX"
                      },
                      "health_care_code_information_10": {
                        "code_list_qualifier_code_01": "BG",
                        "condition_code_02": "X"
                      },
                      "health_care_code_information_11": {
                        "code_list_qualifier_code_01": "BG",
                        "condition_code_02": "XXXXXX"
                      },
                      "health_care_code_information_12": {
                        "code_list_qualifier_code_01": "BG",
                        "condition_code_02": "XXX"
                      }
                    }
                  ],
                  "health_care_diagnosis_code_HI": {
                    "health_care_code_information_01": {
                      "diagnosis_type_code_01": "BK",
                      "diagnosis_code_02": "XXXX"
                    },
                    "health_care_code_information_02": {
                      "diagnosis_type_code_01": "ABF",
                      "diagnosis_code_02": "XXXX"
                    },
                    "health_care_code_information_03": {
                      "diagnosis_type_code_01": "BF",
                      "diagnosis_code_02": "XX"
                    },
                    "health_care_code_information_04": {
                      "diagnosis_type_code_01": "ABF",
                      "diagnosis_code_02": "XXXX"
                    },
                    "health_care_code_information_05": {
                      "diagnosis_type_code_01": "BF",
                      "diagnosis_code_02": "XXXXX"
                    },
                    "health_care_code_information_06": {
                      "diagnosis_type_code_01": "BF",
                      "diagnosis_code_02": "XX"
                    },
                    "health_care_code_information_07": {
                      "diagnosis_type_code_01": "ABF",
                      "diagnosis_code_02": "XX"
                    },
                    "health_care_code_information_08": {
                      "diagnosis_type_code_01": "BF",
                      "diagnosis_code_02": "XXXX"
                    },
                    "health_care_code_information_09": {
                      "diagnosis_type_code_01": "ABF",
                      "diagnosis_code_02": "XXXXXX"
                    },
                    "health_care_code_information_10": {
                      "diagnosis_type_code_01": "BF",
                      "diagnosis_code_02": "X"
                    },
                    "health_care_code_information_11": {
                      "diagnosis_type_code_01": "BF",
                      "diagnosis_code_02": "XX"
                    },
                    "health_care_code_information_12": {
                      "diagnosis_type_code_01": "ABF",
                      "diagnosis_code_02": "XXXX"
                    }
                  },
                  "anesthesia_related_procedure_HI": {
                    "health_care_code_information_01": {
                      "code_list_qualifier_code_01": "BP",
                      "anesthesia_related_surgical_procedure_02": "XXXXXX"
                    },
                    "health_care_code_information_02": {
                      "code_list_qualifier_code_01": "BO",
                      "industry_code_02": "XXXXX"
                    }
                  },
                  "claim_pricing_repricing_information_HCP": {
                    "pricing_methodology_01": "05",
                    "repriced_allowed_amount_02": 0,
                    "repriced_saving_amount_03": 0,
                    "repricing_organization_identifier_04": "XXXX",
                    "repricing_per_diem_or_flat_rate_amount_05": 0,
                    "repriced_approved_ambulatory_patient_group_code_06": "XXXXX",
                    "repriced_approved_ambulatory_patient_group_amount_07": 0,
                    "reject_reason_code_13": "T2",
                    "policy_compliance_code_14": "4",
                    "exception_code_15": "2"
                  },
                  "ambulance_pick_up_location_NM1_loop": {
                    "ambulance_pick_up_location_NM1": {
                      "entity_identifier_code_01": "PW",
                      "entity_type_qualifier_02": "2"
                    },
                    "ambulance_pick_up_location_address_N3": {
                      "ambulance_pick_up_address_line_01": "XXXXXX",
                      "ambulance_pick_up_address_line_02": "XXXXX"
                    },
                    "ambulance_pick_up_location_city_state_zip_code_N4": {
                      "ambulance_pick_up_city_name_01": "XXXXXX",
                      "ambulance_pick_up_state_or_province_code_02": "XX",
                      "ambulance_pick_up_postal_zone_or_zip_code_03": "XXX",
                      "country_code_04": "XXX"
                    }
                  },
                  "referring_provider_name_NM1_loop": [
                    {
                      "referring_provider_name_NM1": {
                        "entity_identifier_code_01": "P3",
                        "entity_type_qualifier_02": "1",
                        "referring_provider_last_name_03": "XXXXXX",
                        "referring_provider_first_name_04": "XXXX",
                        "referring_provider_middle_name_or_initial_05": "XXXX",
                        "referring_provider_name_suffix_07": "XX",
                        "identification_code_qualifier_08": "XX",
                        "referring_provider_identifier_09": "XX"
                      },
                      "referring_provider_secondary_identification_REF": [
                        {
                          "reference_identification_qualifier_01": "1G",
                          "referring_provider_secondary_identifier_02": "XXX"
                        }
                      ]
                    }
                  ],
                  "ambulance_drop_off_location_NM1_loop": {
                    "ambulance_drop_off_location_NM1": {
                      "entity_identifier_code_01": "45",
                      "entity_type_qualifier_02": "2",
                      "ambulance_drop_off_location_03": "X"
                    },
                    "ambulance_drop_off_location_address_N3": {
                      "ambulance_drop_off_address_line_01": "XXX",
                      "ambulance_drop_off_address_line_02": "X"
                    },
                    "ambulance_drop_off_location_city_state_zip_code_N4": {
                      "ambulance_drop_off_city_name_01": "XXXXXXX",
                      "ambulance_drop_off_state_or_province_code_02": "XX",
                      "ambulance_drop_off_postal_zone_or_zip_code_03": "XXXXX",
                      "country_code_04": "XXX"
                    }
                  },
                  "service_facility_location_name_NM1_loop": {
                    "service_facility_location_name_NM1": {
                      "entity_identifier_code_01": "77",
                      "entity_type_qualifier_02": "2",
                      "laboratory_or_facility_name_03": "X",
                      "identification_code_qualifier_08": "XX",
                      "laboratory_or_facility_primary_identifier_09": "XXXXXXX"
                    },
                    "service_facility_location_address_N3": {
                      "laboratory_or_facility_address_line_01": "XX",
                      "laboratory_or_facility_address_line_02": "XX"
                    },
                    "service_facility_location_city_state_zip_code_N4": {
                      "laboratory_or_facility_city_name_01": "XXXXX",
                      "laboratory_or_facility_state_or_province_code_02": "XX",
                      "laboratory_or_facility_postal_zone_or_zip_code_03": "XXX",
                      "country_code_04": "XX"
                    },
                    "service_facility_location_secondary_identification_REF": [
                      {
                        "reference_identification_qualifier_01": "G2",
                        "laboratory_or_facility_secondary_identifier_02": "XXXXXX"
                      }
                    ],
                    "service_facility_contact_information_PER": {
                      "contact_function_code_01": "IC",
                      "name_02": "XXX",
                      "communication_number_qualifier_03": "TE",
                      "communication_number_04": "XXX",
                      "communication_number_qualifier_05": "EX",
                      "communication_number_06": "XXX"
                    }
                  },
                  "rendering_provider_name_NM1_loop": {
                    "rendering_provider_name_NM1": {
                      "entity_identifier_code_01": "82",
                      "entity_type_qualifier_02": "2",
                      "rendering_provider_last_or_organization_name_03": "XX",
                      "rendering_provider_first_name_04": "X",
                      "rendering_provider_middle_name_or_initial_05": "XXXX",
                      "rendering_provider_name_suffix_07": "XXX",
                      "identification_code_qualifier_08": "XX",
                      "rendering_provider_identifier_09": "XXXX"
                    },
                    "rendering_provider_specialty_information_PRV": {
                      "provider_code_01": "PE",
                      "reference_identification_qualifier_02": "PXC",
                      "provider_taxonomy_code_03": "XX"
                    },
                    "rendering_provider_secondary_identification_REF": [
                      {
                        "reference_identification_qualifier_01": "1G",
                        "rendering_provider_secondary_identifier_02": "XXXXXX"
                      }
                    ]
                  },
                  "supervising_provider_name_NM1_loop": {
                    "supervising_provider_name_NM1": {
                      "entity_identifier_code_01": "DQ",
                      "entity_type_qualifier_02": "1",
                      "supervising_provider_last_name_03": "XXXXX",
                      "supervising_provider_first_name_04": "XXXX",
                      "supervising_provider_middle_name_or_initial_05": "XXXXX",
                      "supervising_provider_name_suffix_07": "XXXXXX",
                      "identification_code_qualifier_08": "XX",
                      "supervising_provider_identifier_09": "XXXXXXX"
                    },
                    "supervising_provider_secondary_identification_REF": [
                      {
                        "reference_identification_qualifier_01": "1G",
                        "supervising_provider_secondary_identifier_02": "XXXX"
                      }
                    ]
                  },
                  "other_subscriber_information_SBR_loop": [
                    {
                      "other_subscriber_information_SBR": {
                        "payer_responsibility_sequence_number_code_01": "D",
                        "individual_relationship_code_02": "39",
                        "insured_group_or_policy_number_03": "XXXXX",
                        "other_insured_group_name_04": "XX",
                        "insurance_type_code_05": "15",
                        "claim_filing_indicator_code_09": "CH"
                      },
                      "claim_level_adjustments_CAS": [
                        {
                          "claim_adjustment_group_code_01": "CO",
                          "adjustment_reason_code_02": "XXXX",
                          "adjustment_amount_03": 0,
                          "adjustment_quantity_04": 0,
                          "adjustment_reason_code_05": "XXXX",
                          "adjustment_amount_06": 0,
                          "adjustment_quantity_07": 0,
                          "adjustment_reason_code_08": "XXXXX",
                          "adjustment_amount_09": 0,
                          "adjustment_quantity_10": 0,
                          "adjustment_reason_code_11": "X",
                          "adjustment_amount_12": 0,
                          "adjustment_quantity_13": 0,
                          "adjustment_reason_code_14": "XX",
                          "adjustment_amount_15": 0,
                          "adjustment_quantity_16": 0,
                          "adjustment_reason_code_17": "X",
                          "adjustment_amount_18": 0,
                          "adjustment_quantity_19": 0
                        }
                      ],
                      "remaining_patient_liability_AMT": {
                        "amount_qualifier_code_01": "EAF",
                        "remaining_patient_liability_02": 0
                      },
                      "coordination_of_benefits_cob_payer_paid_amount_AMT": {
                        "amount_qualifier_code_01": "D",
                        "payer_paid_amount_02": 0
                      },
                      "coordination_of_benefits_cob_total_non_covered_amount_AMT": {
                        "amount_qualifier_code_01": "A8",
                        "non_covered_charge_amount_02": 0
                      },
                      "other_insurance_coverage_information_OI": {
                        "benefits_assignment_certification_indicator_03": "W",
                        "patient_signature_source_code_04": "P",
                        "release_of_information_code_06": "Y"
                      },
                      "outpatient_adjudication_information_MOA": {
                        "reimbursement_rate_01": 0,
                        "hcpcs_payable_amount_02": 0,
                        "claim_payment_remark_code_03": "X",
                        "claim_payment_remark_code_04": "X",
                        "claim_payment_remark_code_05": "XXXX",
                        "claim_payment_remark_code_06": "XXXXXX",
                        "claim_payment_remark_code_07": "XXXXX",
                        "end_stage_renal_disease_payment_amount_08": 0,
                        "non_payable_professional_component_billed_amount_09": 0
                      },
                      "other_subscriber_name_NM1_loop": {
                        "other_subscriber_name_NM1": {
                          "entity_identifier_code_01": "IL",
                          "entity_type_qualifier_02": "2",
                          "other_insured_last_name_03": "XXX",
                          "other_insured_first_name_04": "X",
                          "other_insured_middle_name_05": "X",
                          "other_insured_name_suffix_07": "XXXXX",
                          "identification_code_qualifier_08": "II",
                          "other_insured_identifier_09": "XXXX"
                        },
                        "other_subscriber_address_N3": {
                          "other_subscriber_address_line_01": "XXXXXX",
                          "other_insured_address_line_02": "XXXXX"
                        },
                        "other_subscriber_city_state_zip_code_N4": {
                          "other_subscriber_city_name_01": "XX",
                          "other_subscriber_state_or_province_code_02": "XX",
                          "other_subscriber_postal_zone_or_zip_code_03": "XXXX",
                          "country_code_04": "XXX"
                        },
                        "other_subscriber_secondary_identification_REF": {
                          "reference_identification_qualifier_01": "SY",
                          "other_insured_additional_identifier_02": "XXXXX"
                        }
                      },
                      "other_payer_name_NM1_loop": {
                        "other_payer_name_NM1": {
                          "entity_identifier_code_01": "PR",
                          "entity_type_qualifier_02": "2",
                          "other_payer_organization_name_03": "XXX",
                          "identification_code_qualifier_08": "PI",
                          "other_payer_primary_identifier_09": "XX"
                        },
                        "other_payer_address_N3": {
                          "other_payer_address_line_01": "X",
                          "other_payer_address_line_02": "XXXX"
                        },
                        "other_payer_city_state_zip_code_N4": {
                          "other_payer_city_name_01": "XXXXXX",
                          "other_payer_state_or_province_code_02": "XX",
                          "other_payer_postal_zone_or_zip_code_03": "XXXXXXXX",
                          "country_code_04": "XX"
                        },
                        "claim_check_or_remittance_date_DTP": {
                          "date_time_qualifier_01": "573",
                          "date_time_period_format_qualifier_02": "D8",
                          "adjudication_or_payment_date_03": "XXXXX"
                        },
                        "other_payer_secondary_identifier_REF": [
                          {
                            "reference_identification_qualifier_01": "NF",
                            "other_payer_secondary_identifier_02": "XX"
                          }
                        ],
                        "other_payer_claim_control_number_REF": {
                          "reference_identification_qualifier_01": "F8",
                          "other_payers_claim_control_number_02": "XXXX"
                        },
                        "other_payer_claim_adjustment_indicator_REF": {
                          "reference_identification_qualifier_01": "T4",
                          "other_payer_claim_adjustment_indicator_02": "X"
                        },
                        "other_payer_prior_authorization_number_REF": {
                          "reference_identification_qualifier_01": "G1",
                          "other_payer_prior_authorization_number_02": "XXXXXX"
                        },
                        "other_payer_referral_number_REF": {
                          "reference_identification_qualifier_01": "9F",
                          "other_payer_prior_authorization_or_referral_number_02": "XXXX"
                        }
                      },
                      "other_payer_service_facility_location_NM1_loop": {
                        "other_payer_service_facility_location_NM1": {
                          "entity_identifier_code_01": "77",
                          "entity_type_qualifier_02": "2"
                        },
                        "other_payer_service_facility_location_secondary_identification_REF": [
                          {
                            "reference_identification_qualifier_01": "0B",
                            "other_payer_service_facility_location_secondary_identifier_02": "X"
                          }
                        ]
                      },
                      "other_payer_billing_provider_NM1_loop": {
                        "other_payer_billing_provider_NM1": {
                          "entity_identifier_code_01": "85",
                          "entity_type_qualifier_02": "2"
                        },
                        "other_payer_billing_provider_secondary_identification_REF": [
                          {
                            "reference_identification_qualifier_01": "LU",
                            "other_payer_billing_provider_identifier_02": "XXX"
                          }
                        ]
                      },
                      "other_payer_supervising_provider_NM1_loop": {
                        "other_payer_supervising_provider_NM1": {
                          "entity_identifier_code_01": "DQ",
                          "entity_type_qualifier_02": "1"
                        },
                        "other_payer_supervising_provider_secondary_identification_REF": [
                          {
                            "reference_identification_qualifier_01": "LU",
                            "other_payer_supervising_provider_identifier_02": "XXXX"
                          }
                        ]
                      },
                      "other_payer_rendering_provider_NM1_loop": {
                        "other_payer_rendering_provider_NM1": {
                          "entity_identifier_code_01": "82",
                          "entity_type_qualifier_02": "1"
                        },
                        "other_payer_rendering_provider_secondary_identification_REF": [
                          {
                            "reference_identification_qualifier_01": "1G",
                            "other_payer_rendering_provider_secondary_identifier_02": "XXXXX"
                          }
                        ]
                      },
                      "other_payer_referring_provider_NM1_loop": [
                        {
                          "other_payer_referring_provider_NM1": {
                            "entity_identifier_code_01": "DN",
                            "entity_type_qualifier_02": "1"
                          },
                          "other_payer_referring_provider_secondary_identification_REF": [
                            {
                              "reference_identification_qualifier_01": "0B",
                              "other_payer_referring_provider_identifier_02": "XX"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "service_line_number_LX_loop": [
                    {
                      "service_line_number_LX": {
                        "assigned_number_01": 0
                      },
                      "professional_service_SV1": {
                        "composite_medical_procedure_identifier_01": {
                          "product_or_service_id_qualifier_01": "ER",
                          "procedure_code_02": "XXXXXX",
                          "procedure_modifier_03": "XX",
                          "procedure_modifier_04": "XX",
                          "procedure_modifier_05": "XX",
                          "procedure_modifier_06": "XX",
                          "description_07": "XXXXXX"
                        },
                        "line_item_charge_amount_02": 0,
                        "unit_or_basis_for_measurement_code_03": "UN",
                        "service_unit_count_04": 0,
                        "place_of_service_code_05": "X",
                        "composite_diagnosis_code_pointer_07": {
                          "diagnosis_code_pointer_01": 0,
                          "diagnosis_code_pointer_02": 0,
                          "diagnosis_code_pointer_03": 0,
                          "diagnosis_code_pointer_04": 0
                        },
                        "emergency_indicator_09": "Y",
                        "epsdt_indicator_11": "Y",
                        "family_planning_indicator_12": "Y",
                        "co_pay_status_code_15": "0"
                      },
                      "durable_medical_equipment_service_SV5": {
                        "composite_medical_procedure_identifier_01": {
                          "procedure_identifier_01": "HC",
                          "procedure_code_02": "XXXXXX"
                        },
                        "unit_or_basis_for_measurement_code_02": "DA",
                        "length_of_medical_necessity_03": 0,
                        "dme_rental_price_04": 0,
                        "dme_purchase_price_05": 0,
                        "rental_unit_price_indicator_06": "1"
                      },
                      "durable_medical_equipment_certificate_of_medical_necessity_indicator_PWK": {
                        "attachment_report_type_code_01": "CT",
                        "attachment_transmission_code_02": "NS"
                      },
                      "line_supplemental_information_PWK": [
                        {
                          "attachment_report_type_code_01": "RT",
                          "attachment_transmission_code_02": "EL",
                          "identification_code_qualifier_05": "AC",
                          "attachment_control_number_06": "XXXXX"
                        }
                      ],
                      "ambulance_transport_information_CR1": {
                        "unit_or_basis_for_measurement_code_01": "LB",
                        "patient_weight_02": 0,
                        "ambulance_transport_reason_code_04": "A",
                        "unit_or_basis_for_measurement_code_05": "DH",
                        "transport_distance_06": 0,
                        "round_trip_purpose_description_09": "X",
                        "stretcher_purpose_description_10": "XXXXXX"
                      },
                      "durable_medical_equipment_certification_CR3": {
                        "certification_type_code_01": "I",
                        "unit_or_basis_for_measurement_code_02": "MO",
                        "durable_medical_equipment_duration_03": 0
                      },
                      "condition_indicator_durable_medical_equipment_CRC": {
                        "code_category_01": "09",
                        "certification_condition_indicator_02": "Y",
                        "condition_indicator_03": "ZV",
                        "condition_indicator_04": "XXX"
                      },
                      "ambulance_certification_CRC": [
                        {
                          "code_category_01": "07",
                          "certification_condition_indicator_02": "Y",
                          "condition_code_03": "04",
                          "condition_code_04": "XX",
                          "condition_code_05": "XX",
                          "condition_code_06": "XXX",
                          "condition_code_07": "XXX"
                        }
                      ],
                      "hospice_employee_indicator_CRC": {
                        "code_category_01": "70",
                        "hospice_employed_provider_indicator_02": "N",
                        "condition_indicator_03": "65"
                      },
                      "date_last_seen_date_DTP": {
                        "date_time_qualifier_01": "304",
                        "date_time_period_format_qualifier_02": "D8",
                        "treatment_or_therapy_date_03": "XX"
                      },
                      "date_last_x_ray_date_DTP": {
                        "date_time_qualifier_01": "455",
                        "date_time_period_format_qualifier_02": "D8",
                        "last_x_ray_date_03": "XXX"
                      },
                      "date_initial_treatment_date_DTP": {
                        "date_time_qualifier_01": "454",
                        "date_time_period_format_qualifier_02": "D8",
                        "initial_treatment_date_03": "XX"
                      },
                      "date_begin_therapy_date_DTP": {
                        "date_time_qualifier_01": "463",
                        "date_time_period_format_qualifier_02": "D8",
                        "begin_therapy_date_03": "XX"
                      },
                      "date_certification_revision_recertification_date_DTP": {
                        "date_time_qualifier_01": "607",
                        "date_time_period_format_qualifier_02": "D8",
                        "certification_revision_or_recertification_date_03": "XX"
                      },
                      "date_test_date_DTP": [
                        {
                          "date_time_qualifier_01": "739",
                          "date_time_period_format_qualifier_02": "D8",
                          "test_performed_date_03": "XXXXX"
                        }
                      ],
                      "date_service_date_DTP": {
                        "date_time_qualifier_01": "472",
                        "date_time_period_format_qualifier_02": "D8",
                        "service_date_03": "XXX"
                      },
                      "date_prescription_date_DTP": {
                        "date_time_qualifier_01": "471",
                        "date_time_period_format_qualifier_02": "D8",
                        "prescription_date_03": "XXXX"
                      },
                      "date_shipped_date_DTP": {
                        "date_time_qualifier_01": "011",
                        "date_time_period_format_qualifier_02": "D8",
                        "shipped_date_03": "X"
                      },
                      "date_last_certification_date_DTP": {
                        "date_time_qualifier_01": "461",
                        "date_time_period_format_qualifier_02": "D8",
                        "last_certification_date_03": "X"
                      },
                      "ambulance_patient_count_QTY": {
                        "quantity_qualifier_01": "PT",
                        "ambulance_patient_count_02": 0
                      },
                      "obstetric_anesthesia_additional_units_QTY": {
                        "quantity_qualifier_01": "FL",
                        "obstetric_additional_units_02": 0
                      },
                      "test_result_MEA": [
                        {
                          "measurement_reference_identification_code_01": "OG",
                          "measurement_qualifier_02": "R3",
                          "test_results_03": 0
                        }
                      ],
                      "contract_information_CN1": {
                        "contract_type_code_01": "06",
                        "contract_amount_02": 0,
                        "contract_percentage_03": 0,
                        "contract_code_04": "XXXX",
                        "terms_discount_percentage_05": 0,
                        "contract_version_identifier_06": "XXXXXX"
                      },
                      "prior_authorization_REF": [
                        {
                          "reference_identification_qualifier_01": "G1",
                          "prior_authorization_or_referral_number_02": "X",
                          "reference_identifier_04": {
                            "reference_identification_qualifier_01": "2U",
                            "other_payer_primary_identifier_02": "XX"
                          }
                        }
                      ],
                      "repriced_line_item_reference_number_REF": {
                        "reference_identification_qualifier_01": "9B",
                        "repriced_line_item_reference_number_02": "XX"
                      },
                      "line_item_control_number_REF": {
                        "reference_identification_qualifier_01": "6R",
                        "line_item_control_number_02": "XX"
                      },
                      "referring_clinical_laboratory_improvement_amendment_clia_facility_identification_REF": {
                        "reference_identification_qualifier_01": "F4",
                        "referring_clia_number_02": "XX"
                      },
                      "clinical_laboratory_improvement_amendment_clia_number_REF": {
                        "reference_identification_qualifier_01": "X4",
                        "clinical_laboratory_improvement_amendment_number_02": "XXXX"
                      },
                      "adjusted_repriced_line_item_reference_number_REF": {
                        "reference_identification_qualifier_01": "9D",
                        "adjusted_repriced_line_item_reference_number_02": "XXXXXX"
                      },
                      "immunization_batch_number_REF": {
                        "reference_identification_qualifier_01": "BT",
                        "immunization_batch_number_02": "XXXXXX"
                      },
                      "referral_number_REF": [
                        {
                          "reference_identification_qualifier_01": "9F",
                          "referral_number_02": "X",
                          "reference_identifier_04": {
                            "reference_identification_qualifier_01": "2U",
                            "other_payer_primary_identifier_02": "XXX"
                          }
                        }
                      ],
                      "mammography_certification_number_REF": {
                        "reference_identification_qualifier_01": "EW",
                        "mammography_certification_number_02": "XXXX"
                      },
                      "postage_claimed_amount_AMT": {
                        "amount_qualifier_code_01": "F4",
                        "postage_claimed_amount_02": 0
                      },
                      "sales_tax_amount_AMT": {
                        "amount_qualifier_code_01": "T",
                        "sales_tax_amount_02": 0
                      },
                      "file_information_K3": [
                        {
                          "fixed_format_information_01": "XXXXXX"
                        }
                      ],
                      "third_party_organization_notes_NTE": {
                        "note_reference_code_01": "TPO",
                        "line_note_text_02": "X"
                      },
                      "line_note_NTE": {
                        "note_reference_code_01": "DCP",
                        "line_note_text_02": "X"
                      },
                      "purchased_service_information_PS1": {
                        "purchased_service_provider_identifier_01": "XXXXXX",
                        "purchased_service_charge_amount_02": 0
                      },
                      "line_pricing_repricing_information_HCP": {
                        "pricing_methodology_01": "03",
                        "repriced_allowed_amount_02": 0,
                        "repriced_saving_amount_03": 0,
                        "repricing_organization_identifier_04": "XXXXX",
                        "repricing_per_diem_or_flat_rate_amount_05": 0,
                        "repriced_approved_ambulatory_patient_group_code_06": "XXXXXX",
                        "repriced_approved_ambulatory_patient_group_amount_07": 0,
                        "product_or_service_id_qualifier_09": "WK",
                        "repriced_approved_hcpcs_code_10": "XXXXX",
                        "unit_or_basis_for_measurement_code_11": "UN",
                        "repriced_approved_service_unit_count_12": 0,
                        "reject_reason_code_13": "T5",
                        "policy_compliance_code_14": "3",
                        "exception_code_15": "3"
                      },
                      "drug_identification_LIN_loop": {
                        "drug_identification_LIN": {
                          "product_or_service_id_qualifier_02": "N4",
                          "national_drug_code_or_universal_product_number_03": "XXXX"
                        },
                        "drug_quantity_CTP": {
                          "national_drug_unit_count_04": 0,
                          "composite_unit_of_measure_05": {
                            "code_qualifier_01": "ME"
                          }
                        },
                        "prescription_or_compound_drug_association_number_REF": {
                          "reference_identification_qualifier_01": "VY",
                          "prescription_number_02": "XXXXX"
                        }
                      },
                      "service_facility_location_name_NM1_loop": {
                        "service_facility_location_name_NM1": {
                          "entity_identifier_code_01": "77",
                          "entity_type_qualifier_02": "2",
                          "laboratory_or_facility_name_03": "XXXX",
                          "identification_code_qualifier_08": "XX",
                          "laboratory_or_facility_primary_identifier_09": "XXXXX"
                        },
                        "service_facility_location_address_N3": {
                          "laboratory_or_facility_address_line_01": "XX",
                          "laboratory_or_facility_address_line_02": "XXXX"
                        },
                        "service_facility_location_city_state_zip_code_N4": {
                          "laboratory_or_facility_city_name_01": "XXXXXX",
                          "laboratory_or_facility_state_or_province_code_02": "XX",
                          "laboratory_or_facility_postal_zone_or_zip_code_03": "XXX",
                          "country_code_04": "XXX"
                        },
                        "service_facility_location_secondary_identification_REF": [
                          {
                            "reference_identification_qualifier_01": "LU",
                            "service_facility_location_secondary_identifier_02": "XXXXXX",
                            "reference_identifier_04": {
                              "reference_identification_qualifier_01": "2U",
                              "other_payer_primary_identifier_02": "XXXX"
                            }
                          }
                        ]
                      },
                      "ordering_provider_name_NM1_loop": {
                        "ordering_provider_name_NM1": {
                          "entity_identifier_code_01": "DK",
                          "entity_type_qualifier_02": "1",
                          "ordering_provider_last_name_03": "X",
                          "ordering_provider_first_name_04": "X",
                          "ordering_provider_middle_name_or_initial_05": "XXXXX",
                          "ordering_provider_name_suffix_07": "X",
                          "identification_code_qualifier_08": "XX",
                          "ordering_provider_identifier_09": "XXX"
                        },
                        "ordering_provider_address_N3": {
                          "ordering_provider_address_line_01": "XXXX",
                          "ordering_provider_address_line_02": "XXX"
                        },
                        "ordering_provider_city_state_zip_code_N4": {
                          "ordering_provider_city_name_01": "XXXXX",
                          "ordering_provider_state_or_province_code_02": "XX",
                          "ordering_provider_postal_zone_or_zip_code_03": "XXXX",
                          "country_code_04": "XX"
                        },
                        "ordering_provider_secondary_identification_REF": [
                          {
                            "reference_identification_qualifier_01": "G2",
                            "ordering_provider_secondary_identifier_02": "XXXXX",
                            "reference_identifier_04": {
                              "reference_identification_qualifier_01": "2U",
                              "other_payer_primary_identifier_02": "X"
                            }
                          }
                        ],
                        "ordering_provider_contact_information_PER": {
                          "contact_function_code_01": "IC",
                          "ordering_provider_contact_name_02": "XXXX",
                          "communication_number_qualifier_03": "TE",
                          "communication_number_04": "X",
                          "communication_number_qualifier_05": "EM",
                          "communication_number_06": "XXXXX",
                          "communication_number_qualifier_07": "FX",
                          "communication_number_08": "XXXX"
                        }
                      },
                      "ambulance_pick_up_location_NM1_loop": {
                        "ambulance_pick_up_location_NM1": {
                          "entity_identifier_code_01": "PW",
                          "entity_type_qualifier_02": "2"
                        },
                        "ambulance_pick_up_location_address_N3": {
                          "ambulance_pick_up_address_line_01": "XX",
                          "ambulance_pick_up_address_line_02": "XXX"
                        },
                        "ambulance_pick_up_location_city_state_zip_code_N4": {
                          "ambulance_pick_up_city_name_01": "XXXXXXX",
                          "ambulance_pick_up_state_or_province_code_02": "XX",
                          "ambulance_pick_up_postal_zone_or_zip_code_03": "XXXXXXXX",
                          "country_code_04": "XX"
                        }
                      },
                      "ambulance_drop_off_location_NM1_loop": {
                        "ambulance_drop_off_location_NM1": {
                          "entity_identifier_code_01": "45",
                          "entity_type_qualifier_02": "2",
                          "ambulance_drop_off_location_03": "XXXXXX"
                        },
                        "ambulance_drop_off_location_address_N3": {
                          "ambulance_drop_off_address_line_01": "XXX",
                          "ambulance_drop_off_address_line_02": "XX"
                        },
                        "ambulance_drop_off_location_city_state_zip_code_N4": {
                          "ambulance_drop_off_city_name_01": "XX",
                          "ambulance_drop_off_state_or_province_code_02": "XX",
                          "ambulance_drop_off_postal_zone_or_zip_code_03": "XXXX",
                          "country_code_04": "XXX"
                        }
                      },
                      "rendering_provider_name_NM1_loop": {
                        "rendering_provider_name_NM1": {
                          "entity_identifier_code_01": "82",
                          "entity_type_qualifier_02": "1",
                          "rendering_provider_last_or_organization_name_03": "X",
                          "rendering_provider_first_name_04": "XXXXXX",
                          "rendering_provider_middle_name_or_initial_05": "XXXXXX",
                          "rendering_provider_name_suffix_07": "XXXXXX",
                          "identification_code_qualifier_08": "XX",
                          "rendering_provider_identifier_09": "XXXXXX"
                        },
                        "rendering_provider_specialty_information_PRV": {
                          "provider_code_01": "PE",
                          "reference_identification_qualifier_02": "PXC",
                          "provider_taxonomy_code_03": "X"
                        },
                        "rendering_provider_secondary_identification_REF": [
                          {
                            "reference_identification_qualifier_01": "G2",
                            "rendering_provider_secondary_identifier_02": "XX",
                            "reference_identifier_04": {
                              "reference_identification_qualifier_01": "2U",
                              "other_payer_primary_identifier_02": "XXXXX"
                            }
                          }
                        ]
                      },
                      "supervising_provider_name_NM1_loop": {
                        "supervising_provider_name_NM1": {
                          "entity_identifier_code_01": "DQ",
                          "entity_type_qualifier_02": "1",
                          "supervising_provider_last_name_03": "XX",
                          "supervising_provider_first_name_04": "XXXXX",
                          "supervising_provider_middle_name_or_initial_05": "X",
                          "supervising_provider_name_suffix_07": "XXX",
                          "identification_code_qualifier_08": "XX",
                          "supervising_provider_identifier_09": "XXXXXXX"
                        },
                        "supervising_provider_secondary_identification_REF": [
                          {
                            "reference_identification_qualifier_01": "G2",
                            "supervising_provider_secondary_identifier_02": "XXXX",
                            "reference_identifier_04": {
                              "reference_identification_qualifier_01": "2U",
                              "other_payer_primary_identifier_02": "XXXXXX"
                            }
                          }
                        ]
                      },
                      "referring_provider_name_NM1_loop": [
                        {
                          "referring_provider_name_NM1": {
                            "entity_identifier_code_01": "DN",
                            "entity_type_qualifier_02": "1",
                            "referring_provider_last_name_03": "XX",
                            "referring_provider_first_name_04": "XXXXXX",
                            "referring_provider_middle_name_or_initial_05": "XX",
                            "referring_provider_name_suffix_07": "X",
                            "identification_code_qualifier_08": "XX",
                            "referring_provider_identifier_09": "XXXXXXX"
                          },
                          "referring_provider_secondary_identification_REF": [
                            {
                              "reference_identification_qualifier_01": "G2",
                              "referring_provider_secondary_identifier_02": "XX",
                              "reference_identifier_04": {
                                "reference_identification_qualifier_01": "2U",
                                "other_payer_primary_identifier_02": "XX"
                              }
                            }
                          ]
                        }
                      ],
                      "purchased_service_provider_name_NM1_loop": {
                        "purchased_service_provider_name_NM1": {
                          "entity_identifier_code_01": "QB",
                          "entity_type_qualifier_02": "1",
                          "identification_code_qualifier_08": "XX",
                          "purchased_service_provider_identifier_09": "XXXXXXX"
                        },
                        "purchased_service_provider_secondary_identification_REF": [
                          {
                            "reference_identification_qualifier_01": "0B",
                            "purchased_service_provider_secondary_identifier_02": "XX",
                            "reference_identifier_04": {
                              "reference_identification_qualifier_01": "2U",
                              "other_payer_primary_identifier_02": "X"
                            }
                          }
                        ]
                      },
                      "line_adjudication_information_SVD_loop": [
                        {
                          "line_adjudication_information_SVD": {
                            "other_payer_primary_identifier_01": "XXXXXX",
                            "service_line_paid_amount_02": 0,
                            "composite_medical_procedure_identifier_03": {
                              "product_or_service_id_qualifier_01": "ER",
                              "procedure_code_02": "XXXXXX",
                              "procedure_modifier_03": "XX",
                              "procedure_modifier_04": "XX",
                              "procedure_modifier_05": "XX",
                              "procedure_modifier_06": "XX",
                              "procedure_code_description_07": "XXXXX"
                            },
                            "paid_service_unit_count_05": 0,
                            "bundled_or_unbundled_line_number_06": 0
                          },
                          "line_adjustment_CAS": [
                            {
                              "claim_adjustment_group_code_01": "OA",
                              "adjustment_reason_code_02": "XXXX",
                              "adjustment_amount_03": 0,
                              "adjustment_quantity_04": 0,
                              "adjustment_reason_code_05": "X",
                              "adjustment_amount_06": 0,
                              "adjustment_quantity_07": 0,
                              "adjustment_reason_code_08": "XXX",
                              "adjustment_amount_09": 0,
                              "adjustment_quantity_10": 0,
                              "adjustment_reason_code_11": "XX",
                              "adjustment_amount_12": 0,
                              "adjustment_quantity_13": 0,
                              "adjustment_reason_code_14": "XXXX",
                              "adjustment_amount_15": 0,
                              "adjustment_quantity_16": 0,
                              "adjustment_reason_code_17": "XXXX",
                              "adjustment_amount_18": 0,
                              "adjustment_quantity_19": 0
                            }
                          ],
                          "line_check_or_remittance_date_DTP": {
                            "date_time_qualifier_01": "573",
                            "date_time_period_format_qualifier_02": "D8",
                            "adjudication_or_payment_date_03": "XXXX"
                          },
                          "remaining_patient_liability_AMT": {
                            "amount_qualifier_code_01": "EAF",
                            "remaining_patient_liability_02": 0
                          }
                        }
                      ],
                      "form_identification_code_LQ_loop": [
                        {
                          "form_identification_code_LQ": {
                            "code_list_qualifier_code_01": "UT",
                            "form_identifier_02": "XXXXX"
                          },
                          "supporting_documentation_FRM": [
                            {
                              "question_number_letter_01": "XXXXXX",
                              "question_response_02": "W",
                              "question_response_03": "XXX",
                              "question_response_04": "2023-06-27",
                              "question_response_05": 0
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ],
              "patient_hierarchical_level_HL_loop": [
                {
                  "patient_information_PAT": {
                    "individual_relationship_code_01": "39",
                    "date_time_period_format_qualifier_05": "D8",
                    "patient_death_date_06": "XXXX",
                    "unit_or_basis_for_measurement_code_07": "01",
                    "patient_weight_08": 0,
                    "pregnancy_indicator_09": "Y"
                  },
                  "patient_name_NM1_loop": {
                    "patient_name_NM1": {
                      "entity_identifier_code_01": "QC",
                      "entity_type_qualifier_02": "1",
                      "patient_last_name_03": "X",
                      "patient_first_name_04": "XXX",
                      "patient_middle_name_or_initial_05": "XXXXXX",
                      "patient_name_suffix_07": "XXXX"
                    },
                    "patient_address_N3": {
                      "patient_address_line_01": "X",
                      "patient_address_line_02": "XXX"
                    },
                    "patient_city_state_zip_code_N4": {
                      "patient_city_name_01": "XX",
                      "patient_state_code_02": "XX",
                      "patient_postal_zone_or_zip_code_03": "XXXXXXXX",
                      "country_code_04": "XXX"
                    },
                    "patient_demographic_information_DMG": {
                      "date_time_period_format_qualifier_01": "D8",
                      "patient_birth_date_02": "XXXXX",
                      "patient_gender_code_03": "F"
                    },
                    "property_and_casualty_patient_identifier_REF": {
                      "reference_identification_qualifier_01": "SY",
                      "property_and_casualty_patient_identifier_02": "XXXXX"
                    },
                    "property_and_casualty_claim_number_REF": {
                      "reference_identification_qualifier_01": "Y4",
                      "property_casualty_claim_number_02": "XX"
                    },
                    "property_and_casualty_patient_contact_information_PER": {
                      "contact_function_code_01": "IC",
                      "name_02": "X",
                      "communication_number_qualifier_03": "TE",
                      "communication_number_04": "XXXX",
                      "communication_number_qualifier_05": "EX",
                      "communication_number_06": "XXXXX"
                    }
                  },
                  "claim_information_CLM_loop": [
                    {
                      "claim_information_CLM": {
                        "patient_control_number_01": "X",
                        "total_claim_charge_amount_02": 0,
                        "health_care_service_location_information_05": {
                          "place_of_service_code_01": "X",
                          "facility_code_qualifier_02": "B",
                          "claim_frequency_code_03": "X"
                        },
                        "provider_or_supplier_signature_indicator_06": "N",
                        "assignment_or_plan_participation_code_07": "B",
                        "benefits_assignment_certification_indicator_08": "N",
                        "release_of_information_code_09": "I",
                        "patient_signature_source_code_10": "P",
                        "related_causes_information_11": {
                          "related_causes_code_01": "AA",
                          "related_causes_code_02": "XXX",
                          "auto_accident_state_or_province_code_04": "XX"
                        },
                        "special_program_indicator_12": "09",
                        "delay_reason_code_20": "4"
                      },
                      "date_last_worked_DTP": {
                        "date_time_qualifier_01": "297",
                        "date_time_period_format_qualifier_02": "D8",
                        "last_worked_date_03": "XXX"
                      },
                      "date_last_menstrual_period_DTP": {
                        "date_time_qualifier_01": "484",
                        "date_time_period_format_qualifier_02": "D8",
                        "last_menstrual_period_date_03": "XXX"
                      },
                      "date_acute_manifestation_DTP": {
                        "date_time_qualifier_01": "453",
                        "date_time_period_format_qualifier_02": "D8",
                        "acute_manifestation_date_03": "X"
                      },
                      "date_hearing_and_vision_prescription_date_DTP": {
                        "date_time_qualifier_01": "471",
                        "date_time_period_format_qualifier_02": "D8",
                        "prescription_date_03": "XXXXX"
                      },
                      "date_accident_DTP": {
                        "date_time_qualifier_01": "439",
                        "date_time_period_format_qualifier_02": "D8",
                        "accident_date_03": "XXXXXX"
                      },
                      "date_authorized_return_to_work_DTP": {
                        "date_time_qualifier_01": "296",
                        "date_time_period_format_qualifier_02": "D8",
                        "work_return_date_03": "X"
                      },
                      "date_onset_of_current_illness_or_symptom_DTP": {
                        "date_time_qualifier_01": "431",
                        "date_time_period_format_qualifier_02": "D8",
                        "onset_of_current_illness_or_injury_date_03": "XXXX"
                      },
                      "date_admission_DTP": {
                        "date_time_qualifier_01": "435",
                        "date_time_period_format_qualifier_02": "D8",
                        "related_hospitalization_admission_date_03": "XXXX"
                      },
                      "date_repricer_received_date_DTP": {
                        "date_time_qualifier_01": "050",
                        "date_time_period_format_qualifier_02": "D8",
                        "repricer_received_date_03": "XX"
                      },
                      "date_last_seen_date_DTP": {
                        "date_time_qualifier_01": "304",
                        "date_time_period_format_qualifier_02": "D8",
                        "last_seen_date_03": "X"
                      },
                      "date_initial_treatment_date_DTP": {
                        "date_time_qualifier_01": "454",
                        "date_time_period_format_qualifier_02": "D8",
                        "initial_treatment_date_03": "XXXXXX"
                      },
                      "date_property_and_casualty_date_of_first_contact_DTP": {
                        "date_time_qualifier_01": "444",
                        "date_time_period_format_qualifier_02": "D8",
                        "date_time_period_03": "XX"
                      },
                      "date_disability_dates_DTP": {
                        "date_time_qualifier_01": "360",
                        "date_time_period_format_qualifier_02": "D8",
                        "disability_from_date_03": "XXXXX"
                      },
                      "date_discharge_DTP": {
                        "date_time_qualifier_01": "096",
                        "date_time_period_format_qualifier_02": "D8",
                        "related_hospitalization_discharge_date_03": "XX"
                      },
                      "date_assumed_and_relinquished_care_dates_DTP": [
                        {
                          "date_time_qualifier_01": "090",
                          "date_time_period_format_qualifier_02": "D8",
                          "assumed_or_relinquished_care_date_03": "XXXX"
                        }
                      ],
                      "date_last_x_ray_date_DTP": {
                        "date_time_qualifier_01": "455",
                        "date_time_period_format_qualifier_02": "D8",
                        "last_x_ray_date_03": "XXXXXX"
                      },
                      "claim_supplemental_information_PWK": [
                        {
                          "attachment_report_type_code_01": "13",
                          "attachment_transmission_code_02": "FX",
                          "identification_code_qualifier_05": "AC",
                          "attachment_control_number_06": "XXXX"
                        }
                      ],
                      "contract_information_CN1": {
                        "contract_type_code_01": "03",
                        "contract_amount_02": 0,
                        "contract_percentage_03": 0,
                        "contract_code_04": "XXXX",
                        "terms_discount_percentage_05": 0,
                        "contract_version_identifier_06": "X"
                      },
                      "patient_amount_paid_AMT": {
                        "amount_qualifier_code_01": "F5",
                        "patient_amount_paid_02": 0
                      },
                      "care_plan_oversight_REF": {
                        "reference_identification_qualifier_01": "1J",
                        "care_plan_oversight_number_02": "XXXXXX"
                      },
                      "referral_number_REF": {
                        "reference_identification_qualifier_01": "9F",
                        "referral_number_02": "XXXXX"
                      },
                      "mandatory_medicare_section_4081_crossover_indicator_REF": {
                        "reference_identification_qualifier_01": "F5",
                        "medicare_section_4081_indicator_02": "XXX"
                      },
                      "clinical_laboratory_improvement_amendment_clia_number_REF": {
                        "reference_identification_qualifier_01": "X4",
                        "clinical_laboratory_improvement_amendment_number_02": "XXXX"
                      },
                      "mammography_certification_number_REF": {
                        "reference_identification_qualifier_01": "EW",
                        "mammography_certification_number_02": "XXXXX"
                      },
                      "repriced_claim_number_REF": {
                        "reference_identification_qualifier_01": "9A",
                        "repriced_claim_reference_number_02": "XXXXXX"
                      },
                      "prior_authorization_REF": {
                        "reference_identification_qualifier_01": "G1",
                        "prior_authorization_number_02": "XXXXXX"
                      },
                      "medical_record_number_REF": {
                        "reference_identification_qualifier_01": "EA",
                        "medical_record_number_02": "XXXX"
                      },
                      "claim_identifier_for_transmission_intermediaries_REF": {
                        "reference_identification_qualifier_01": "D9",
                        "value_added_network_trace_number_02": "XXXXXX"
                      },
                      "demonstration_project_identifier_REF": {
                        "reference_identification_qualifier_01": "P4",
                        "demonstration_project_identifier_02": "XX"
                      },
                      "service_authorization_exception_code_REF": {
                        "reference_identification_qualifier_01": "4N",
                        "service_authorization_exception_code_02": "XXXXXX"
                      },
                      "adjusted_repriced_claim_number_REF": {
                        "reference_identification_qualifier_01": "9C",
                        "adjusted_repriced_claim_reference_number_02": "XXXXXX"
                      },
                      "investigational_device_exemption_number_REF": {
                        "reference_identification_qualifier_01": "LX",
                        "investigational_device_exemption_identifier_02": "XXXX"
                      },
                      "payer_claim_control_number_REF": {
                        "reference_identification_qualifier_01": "F8",
                        "payer_claim_control_number_02": "XX"
                      },
                      "file_information_K3": [
                        {
                          "fixed_format_information_01": "XX"
                        }
                      ],
                      "claim_note_NTE": {
                        "note_reference_code_01": "DGN",
                        "claim_note_text_02": "XXXX"
                      },
                      "ambulance_transport_information_CR1": {
                        "unit_or_basis_for_measurement_code_01": "LB",
                        "patient_weight_02": 0,
                        "ambulance_transport_reason_code_04": "C",
                        "unit_or_basis_for_measurement_code_05": "DH",
                        "transport_distance_06": 0,
                        "round_trip_purpose_description_09": "XXXXX",
                        "stretcher_purpose_description_10": "XXXXX"
                      },
                      "spinal_manipulation_service_information_CR2": {
                        "patient_condition_code_08": "F",
                        "patient_condition_description_10": "XX",
                        "patient_condition_description_11": "XXXX"
                      },
                      "patient_condition_information_vision_CRC": [
                        {
                          "code_category_01": "E3",
                          "certification_condition_indicator_02": "Y",
                          "condition_code_03": "L1",
                          "condition_code_04": "XX",
                          "condition_code_05": "XX",
                          "condition_code_06": "XXX",
                          "condition_code_07": "XXX"
                        }
                      ],
                      "ambulance_certification_CRC": [
                        {
                          "code_category_01": "07",
                          "certification_condition_indicator_02": "N",
                          "condition_code_03": "09",
                          "condition_code_04": "XXX",
                          "condition_code_05": "XXX",
                          "condition_code_06": "XXX",
                          "condition_code_07": "XX"
                        }
                      ],
                      "homebound_indicator_CRC": {
                        "code_category_01": "75",
                        "certification_condition_indicator_02": "Y",
                        "homebound_indicator_03": "IH"
                      },
                      "epsdt_referral_CRC": {
                        "code_qualifier_01": "ZZ",
                        "certification_condition_code_applies_indicator_02": "Y",
                        "condition_indicator_03": "ST",
                        "condition_indicator_04": "XX",
                        "condition_indicator_05": "XX"
                      },
                      "condition_information_HI": [
                        {
                          "health_care_code_information_01": {
                            "code_list_qualifier_code_01": "BG",
                            "condition_code_02": "XXXXX"
                          },
                          "health_care_code_information_02": {
                            "code_list_qualifier_code_01": "BG",
                            "condition_code_02": "X"
                          },
                          "health_care_code_information_03": {
                            "code_list_qualifier_code_01": "BG",
                            "condition_code_02": "XXX"
                          },
                          "health_care_code_information_04": {
                            "code_list_qualifier_code_01": "BG",
                            "condition_code_02": "XX"
                          },
                          "health_care_code_information_05": {
                            "code_list_qualifier_code_01": "BG",
                            "condition_code_02": "XXXXX"
                          },
                          "health_care_code_information_06": {
                            "code_list_qualifier_code_01": "BG",
                            "condition_code_02": "XX"
                          },
                          "health_care_code_information_07": {
                            "code_list_qualifier_code_01": "BG",
                            "condition_code_02": "XXXX"
                          },
                          "health_care_code_information_08": {
                            "code_list_qualifier_code_01": "BG",
                            "condition_code_02": "X"
                          },
                          "health_care_code_information_09": {
                            "code_list_qualifier_code_01": "BG",
                            "condition_code_02": "XX"
                          },
                          "health_care_code_information_10": {
                            "code_list_qualifier_code_01": "BG",
                            "condition_code_02": "XXXXXX"
                          },
                          "health_care_code_information_11": {
                            "code_list_qualifier_code_01": "BG",
                            "condition_code_02": "XXX"
                          },
                          "health_care_code_information_12": {
                            "code_list_qualifier_code_01": "BG",
                            "condition_code_02": "XXXX"
                          }
                        }
                      ],
                      "health_care_diagnosis_code_HI": {
                        "health_care_code_information_01": {
                          "diagnosis_type_code_01": "ABK",
                          "diagnosis_code_02": "XXXX"
                        },
                        "health_care_code_information_02": {
                          "diagnosis_type_code_01": "ABF",
                          "diagnosis_code_02": "XXXXX"
                        },
                        "health_care_code_information_03": {
                          "diagnosis_type_code_01": "BF",
                          "diagnosis_code_02": "XXX"
                        },
                        "health_care_code_information_04": {
                          "diagnosis_type_code_01": "ABF",
                          "diagnosis_code_02": "XXX"
                        },
                        "health_care_code_information_05": {
                          "diagnosis_type_code_01": "BF",
                          "diagnosis_code_02": "XXX"
                        },
                        "health_care_code_information_06": {
                          "diagnosis_type_code_01": "BF",
                          "diagnosis_code_02": "XX"
                        },
                        "health_care_code_information_07": {
                          "diagnosis_type_code_01": "BF",
                          "diagnosis_code_02": "XXXX"
                        },
                        "health_care_code_information_08": {
                          "diagnosis_type_code_01": "BF",
                          "diagnosis_code_02": "XX"
                        },
                        "health_care_code_information_09": {
                          "diagnosis_type_code_01": "BF",
                          "diagnosis_code_02": "XXXXX"
                        },
                        "health_care_code_information_10": {
                          "diagnosis_type_code_01": "ABF",
                          "diagnosis_code_02": "XX"
                        },
                        "health_care_code_information_11": {
                          "diagnosis_type_code_01": "ABF",
                          "diagnosis_code_02": "XX"
                        },
                        "health_care_code_information_12": {
                          "diagnosis_type_code_01": "ABF",
                          "diagnosis_code_02": "X"
                        }
                      },
                      "anesthesia_related_procedure_HI": {
                        "health_care_code_information_01": {
                          "code_list_qualifier_code_01": "BP",
                          "anesthesia_related_surgical_procedure_02": "XXXX"
                        },
                        "health_care_code_information_02": {
                          "code_list_qualifier_code_01": "BO",
                          "industry_code_02": "X"
                        }
                      },
                      "claim_pricing_repricing_information_HCP": {
                        "pricing_methodology_01": "07",
                        "repriced_allowed_amount_02": 0,
                        "repriced_saving_amount_03": 0,
                        "repricing_organization_identifier_04": "XX",
                        "repricing_per_diem_or_flat_rate_amount_05": 0,
                        "repriced_approved_ambulatory_patient_group_code_06": "XXXX",
                        "repriced_approved_ambulatory_patient_group_amount_07": 0,
                        "reject_reason_code_13": "T6",
                        "policy_compliance_code_14": "5",
                        "exception_code_15": "6"
                      },
                      "ambulance_drop_off_location_NM1_loop": {
                        "ambulance_drop_off_location_NM1": {
                          "entity_identifier_code_01": "45",
                          "entity_type_qualifier_02": "2",
                          "ambulance_drop_off_location_03": "XXXXXX"
                        },
                        "ambulance_drop_off_location_address_N3": {
                          "ambulance_drop_off_address_line_01": "XXXXXX",
                          "ambulance_drop_off_address_line_02": "XXXXX"
                        },
                        "ambulance_drop_off_location_city_state_zip_code_N4": {
                          "ambulance_drop_off_city_name_01": "XXXXXXX",
                          "ambulance_drop_off_state_or_province_code_02": "XX",
                          "ambulance_drop_off_postal_zone_or_zip_code_03": "XXXXXXX",
                          "country_code_04": "XXX"
                        }
                      },
                      "referring_provider_name_NM1_loop": [
                        {
                          "referring_provider_name_NM1": {
                            "entity_identifier_code_01": "DN",
                            "entity_type_qualifier_02": "1",
                            "referring_provider_last_name_03": "XXXXX",
                            "referring_provider_first_name_04": "XXXXX",
                            "referring_provider_middle_name_or_initial_05": "XXXXXX",
                            "referring_provider_name_suffix_07": "XXXXX",
                            "identification_code_qualifier_08": "XX",
                            "referring_provider_identifier_09": "XXXXXXX"
                          },
                          "referring_provider_secondary_identification_REF": [
                            {
                              "reference_identification_qualifier_01": "0B",
                              "referring_provider_secondary_identifier_02": "XXXXXX"
                            }
                          ]
                        }
                      ],
                      "rendering_provider_name_NM1_loop": {
                        "rendering_provider_name_NM1": {
                          "entity_identifier_code_01": "82",
                          "entity_type_qualifier_02": "1",
                          "rendering_provider_last_or_organization_name_03": "XXX",
                          "rendering_provider_first_name_04": "XXXXXX",
                          "rendering_provider_middle_name_or_initial_05": "X",
                          "rendering_provider_name_suffix_07": "XXX",
                          "identification_code_qualifier_08": "XX",
                          "rendering_provider_identifier_09": "XXXXXX"
                        },
                        "rendering_provider_specialty_information_PRV": {
                          "provider_code_01": "PE",
                          "reference_identification_qualifier_02": "PXC",
                          "provider_taxonomy_code_03": "XX"
                        },
                        "rendering_provider_secondary_identification_REF": [
                          {
                            "reference_identification_qualifier_01": "0B",
                            "rendering_provider_secondary_identifier_02": "XXX"
                          }
                        ]
                      },
                      "service_facility_location_name_NM1_loop": {
                        "service_facility_location_name_NM1": {
                          "entity_identifier_code_01": "77",
                          "entity_type_qualifier_02": "2",
                          "laboratory_or_facility_name_03": "X",
                          "identification_code_qualifier_08": "XX",
                          "laboratory_or_facility_primary_identifier_09": "XXX"
                        },
                        "service_facility_location_address_N3": {
                          "laboratory_or_facility_address_line_01": "X",
                          "laboratory_or_facility_address_line_02": "XX"
                        },
                        "service_facility_location_city_state_zip_code_N4": {
                          "laboratory_or_facility_city_name_01": "XXX",
                          "laboratory_or_facility_state_or_province_code_02": "XX",
                          "laboratory_or_facility_postal_zone_or_zip_code_03": "XXXXXX",
                          "country_code_04": "XXX"
                        },
                        "service_facility_location_secondary_identification_REF": [
                          {
                            "reference_identification_qualifier_01": "0B",
                            "laboratory_or_facility_secondary_identifier_02": "XXXXXX"
                          }
                        ],
                        "service_facility_contact_information_PER": {
                          "contact_function_code_01": "IC",
                          "name_02": "XXXXXX",
                          "communication_number_qualifier_03": "TE",
                          "communication_number_04": "XXXXX",
                          "communication_number_qualifier_05": "EX",
                          "communication_number_06": "XXX"
                        }
                      },
                      "supervising_provider_name_NM1_loop": {
                        "supervising_provider_name_NM1": {
                          "entity_identifier_code_01": "DQ",
                          "entity_type_qualifier_02": "1",
                          "supervising_provider_last_name_03": "XXXXXX",
                          "supervising_provider_first_name_04": "XXXX",
                          "supervising_provider_middle_name_or_initial_05": "XXXXX",
                          "supervising_provider_name_suffix_07": "XXXX",
                          "identification_code_qualifier_08": "XX",
                          "supervising_provider_identifier_09": "XXXX"
                        },
                        "supervising_provider_secondary_identification_REF": [
                          {
                            "reference_identification_qualifier_01": "1G",
                            "supervising_provider_secondary_identifier_02": "XXXXX"
                          }
                        ]
                      },
                      "ambulance_pick_up_location_NM1_loop": {
                        "ambulance_pick_up_location_NM1": {
                          "entity_identifier_code_01": "PW",
                          "entity_type_qualifier_02": "2"
                        },
                        "ambulance_pick_up_location_address_N3": {
                          "ambulance_pick_up_address_line_01": "XXX",
                          "ambulance_pick_up_address_line_02": "X"
                        },
                        "ambulance_pick_up_location_city_state_zip_code_N4": {
                          "ambulance_pick_up_city_name_01": "XXXXXXX",
                          "ambulance_pick_up_state_or_province_code_02": "XX",
                          "ambulance_pick_up_postal_zone_or_zip_code_03": "XXX",
                          "country_code_04": "XX"
                        }
                      },
                      "other_subscriber_information_SBR_loop": [
                        {
                          "other_subscriber_information_SBR": {
                            "payer_responsibility_sequence_number_code_01": "F",
                            "individual_relationship_code_02": "01",
                            "insured_group_or_policy_number_03": "XX",
                            "other_insured_group_name_04": "XX",
                            "insurance_type_code_05": "42",
                            "claim_filing_indicator_code_09": "14"
                          },
                          "claim_level_adjustments_CAS": [
                            {
                              "claim_adjustment_group_code_01": "PI",
                              "adjustment_reason_code_02": "X",
                              "adjustment_amount_03": 0,
                              "adjustment_quantity_04": 0,
                              "adjustment_reason_code_05": "XXXXX",
                              "adjustment_amount_06": 0,
                              "adjustment_quantity_07": 0,
                              "adjustment_reason_code_08": "XXXXX",
                              "adjustment_amount_09": 0,
                              "adjustment_quantity_10": 0,
                              "adjustment_reason_code_11": "X",
                              "adjustment_amount_12": 0,
                              "adjustment_quantity_13": 0,
                              "adjustment_reason_code_14": "X",
                              "adjustment_amount_15": 0,
                              "adjustment_quantity_16": 0,
                              "adjustment_reason_code_17": "X",
                              "adjustment_amount_18": 0,
                              "adjustment_quantity_19": 0
                            }
                          ],
                          "coordination_of_benefits_cob_total_non_covered_amount_AMT": {
                            "amount_qualifier_code_01": "A8",
                            "non_covered_charge_amount_02": 0
                          },
                          "coordination_of_benefits_cob_payer_paid_amount_AMT": {
                            "amount_qualifier_code_01": "D",
                            "payer_paid_amount_02": 0
                          },
                          "remaining_patient_liability_AMT": {
                            "amount_qualifier_code_01": "EAF",
                            "remaining_patient_liability_02": 0
                          },
                          "other_insurance_coverage_information_OI": {
                            "benefits_assignment_certification_indicator_03": "N",
                            "patient_signature_source_code_04": "P",
                            "release_of_information_code_06": "I"
                          },
                          "outpatient_adjudication_information_MOA": {
                            "reimbursement_rate_01": 0,
                            "hcpcs_payable_amount_02": 0,
                            "claim_payment_remark_code_03": "XXXXXX",
                            "claim_payment_remark_code_04": "XXXXX",
                            "claim_payment_remark_code_05": "XXXXX",
                            "claim_payment_remark_code_06": "XXXX",
                            "claim_payment_remark_code_07": "XXXXXX",
                            "end_stage_renal_disease_payment_amount_08": 0,
                            "non_payable_professional_component_billed_amount_09": 0
                          },
                          "other_payer_supervising_provider_NM1_loop": {
                            "other_payer_supervising_provider_NM1": {
                              "entity_identifier_code_01": "DQ",
                              "entity_type_qualifier_02": "1"
                            },
                            "other_payer_supervising_provider_secondary_identification_REF": [
                              {
                                "reference_identification_qualifier_01": "LU",
                                "other_payer_supervising_provider_identifier_02": "XXX"
                              }
                            ]
                          },
                          "other_payer_billing_provider_NM1_loop": {
                            "other_payer_billing_provider_NM1": {
                              "entity_identifier_code_01": "85",
                              "entity_type_qualifier_02": "2"
                            },
                            "other_payer_billing_provider_secondary_identification_REF": [
                              {
                                "reference_identification_qualifier_01": "LU",
                                "other_payer_billing_provider_identifier_02": "XXX"
                              }
                            ]
                          },
                          "other_payer_name_NM1_loop": {
                            "other_payer_name_NM1": {
                              "entity_identifier_code_01": "PR",
                              "entity_type_qualifier_02": "2",
                              "other_payer_organization_name_03": "XXX",
                              "identification_code_qualifier_08": "XV",
                              "other_payer_primary_identifier_09": "XXX"
                            },
                            "other_payer_address_N3": {
                              "other_payer_address_line_01": "XXX",
                              "other_payer_address_line_02": "XXX"
                            },
                            "other_payer_city_state_zip_code_N4": {
                              "other_payer_city_name_01": "XXXX",
                              "other_payer_state_or_province_code_02": "XX",
                              "other_payer_postal_zone_or_zip_code_03": "XXXXXXX",
                              "country_code_04": "XXX"
                            },
                            "claim_check_or_remittance_date_DTP": {
                              "date_time_qualifier_01": "573",
                              "date_time_period_format_qualifier_02": "D8",
                              "adjudication_or_payment_date_03": "X"
                            },
                            "other_payer_claim_adjustment_indicator_REF": {
                              "reference_identification_qualifier_01": "T4",
                              "other_payer_claim_adjustment_indicator_02": "XX"
                            },
                            "other_payer_secondary_identifier_REF": [
                              {
                                "reference_identification_qualifier_01": "2U",
                                "other_payer_secondary_identifier_02": "XXXX"
                              }
                            ],
                            "other_payer_prior_authorization_number_REF": {
                              "reference_identification_qualifier_01": "G1",
                              "other_payer_prior_authorization_number_02": "XXXXX"
                            },
                            "other_payer_claim_control_number_REF": {
                              "reference_identification_qualifier_01": "F8",
                              "other_payers_claim_control_number_02": "XX"
                            },
                            "other_payer_referral_number_REF": {
                              "reference_identification_qualifier_01": "9F",
                              "other_payer_prior_authorization_or_referral_number_02": "XXX"
                            }
                          },
                          "other_subscriber_name_NM1_loop": {
                            "other_subscriber_name_NM1": {
                              "entity_identifier_code_01": "IL",
                              "entity_type_qualifier_02": "1",
                              "other_insured_last_name_03": "XX",
                              "other_insured_first_name_04": "X",
                              "other_insured_middle_name_05": "XX",
                              "other_insured_name_suffix_07": "XXXXXX",
                              "identification_code_qualifier_08": "II",
                              "other_insured_identifier_09": "XXXXXX"
                            },
                            "other_subscriber_address_N3": {
                              "other_subscriber_address_line_01": "XXX",
                              "other_insured_address_line_02": "XXX"
                            },
                            "other_subscriber_city_state_zip_code_N4": {
                              "other_subscriber_city_name_01": "XXX",
                              "other_subscriber_state_or_province_code_02": "XX",
                              "other_subscriber_postal_zone_or_zip_code_03": "XXXXXXX",
                              "country_code_04": "XX"
                            },
                            "other_subscriber_secondary_identification_REF": {
                              "reference_identification_qualifier_01": "SY",
                              "other_insured_additional_identifier_02": "X"
                            }
                          },
                          "other_payer_referring_provider_NM1_loop": [
                            {
                              "other_payer_referring_provider_NM1": {
                                "entity_identifier_code_01": "P3",
                                "entity_type_qualifier_02": "1"
                              },
                              "other_payer_referring_provider_secondary_identification_REF": [
                                {
                                  "reference_identification_qualifier_01": "1G",
                                  "other_payer_referring_provider_identifier_02": "XXXXXX"
                                }
                              ]
                            }
                          ],
                          "other_payer_rendering_provider_NM1_loop": {
                            "other_payer_rendering_provider_NM1": {
                              "entity_identifier_code_01": "82",
                              "entity_type_qualifier_02": "2"
                            },
                            "other_payer_rendering_provider_secondary_identification_REF": [
                              {
                                "reference_identification_qualifier_01": "0B",
                                "other_payer_rendering_provider_secondary_identifier_02": "XX"
                              }
                            ]
                          },
                          "other_payer_service_facility_location_NM1_loop": {
                            "other_payer_service_facility_location_NM1": {
                              "entity_identifier_code_01": "77",
                              "entity_type_qualifier_02": "2"
                            },
                            "other_payer_service_facility_location_secondary_identification_REF": [
                              {
                                "reference_identification_qualifier_01": "G2",
                                "other_payer_service_facility_location_secondary_identifier_02": "XXXX"
                              }
                            ]
                          }
                        }
                      ],
                      "service_line_number_LX_loop": [
                        {
                          "service_line_number_LX": {
                            "assigned_number_01": 0
                          },
                          "professional_service_SV1": {
                            "composite_medical_procedure_identifier_01": {
                              "product_or_service_id_qualifier_01": "WK",
                              "procedure_code_02": "XXXXXX",
                              "procedure_modifier_03": "XX",
                              "procedure_modifier_04": "XX",
                              "procedure_modifier_05": "XX",
                              "procedure_modifier_06": "XX",
                              "description_07": "XXX"
                            },
                            "line_item_charge_amount_02": 0,
                            "unit_or_basis_for_measurement_code_03": "UN",
                            "service_unit_count_04": 0,
                            "place_of_service_code_05": "X",
                            "composite_diagnosis_code_pointer_07": {
                              "diagnosis_code_pointer_01": 0,
                              "diagnosis_code_pointer_02": 0,
                              "diagnosis_code_pointer_03": 0,
                              "diagnosis_code_pointer_04": 0
                            },
                            "emergency_indicator_09": "Y",
                            "epsdt_indicator_11": "Y",
                            "family_planning_indicator_12": "Y",
                            "co_pay_status_code_15": "0"
                          },
                          "durable_medical_equipment_service_SV5": {
                            "composite_medical_procedure_identifier_01": {
                              "procedure_identifier_01": "HC",
                              "procedure_code_02": "XXXXXX"
                            },
                            "unit_or_basis_for_measurement_code_02": "DA",
                            "length_of_medical_necessity_03": 0,
                            "dme_rental_price_04": 0,
                            "dme_purchase_price_05": 0,
                            "rental_unit_price_indicator_06": "4"
                          },
                          "durable_medical_equipment_certificate_of_medical_necessity_indicator_PWK": {
                            "attachment_report_type_code_01": "CT",
                            "attachment_transmission_code_02": "AB"
                          },
                          "line_supplemental_information_PWK": [
                            {
                              "attachment_report_type_code_01": "B3",
                              "attachment_transmission_code_02": "FX",
                              "identification_code_qualifier_05": "AC",
                              "attachment_control_number_06": "XXX"
                            }
                          ],
                          "ambulance_transport_information_CR1": {
                            "unit_or_basis_for_measurement_code_01": "LB",
                            "patient_weight_02": 0,
                            "ambulance_transport_reason_code_04": "B",
                            "unit_or_basis_for_measurement_code_05": "DH",
                            "transport_distance_06": 0,
                            "round_trip_purpose_description_09": "XXXX",
                            "stretcher_purpose_description_10": "XXXX"
                          },
                          "durable_medical_equipment_certification_CR3": {
                            "certification_type_code_01": "R",
                            "unit_or_basis_for_measurement_code_02": "MO",
                            "durable_medical_equipment_duration_03": 0
                          },
                          "ambulance_certification_CRC": [
                            {
                              "code_category_01": "07",
                              "certification_condition_indicator_02": "Y",
                              "condition_code_03": "04",
                              "condition_code_04": "XX",
                              "condition_code_05": "XXX",
                              "condition_code_06": "XXX",
                              "condition_code_07": "XX"
                            }
                          ],
                          "condition_indicator_durable_medical_equipment_CRC": {
                            "code_category_01": "09",
                            "certification_condition_indicator_02": "N",
                            "condition_indicator_03": "ZV",
                            "condition_indicator_04": "XX"
                          },
                          "hospice_employee_indicator_CRC": {
                            "code_category_01": "70",
                            "hospice_employed_provider_indicator_02": "N",
                            "condition_indicator_03": "65"
                          },
                          "date_last_seen_date_DTP": {
                            "date_time_qualifier_01": "304",
                            "date_time_period_format_qualifier_02": "D8",
                            "treatment_or_therapy_date_03": "XXX"
                          },
                          "date_test_date_DTP": [
                            {
                              "date_time_qualifier_01": "738",
                              "date_time_period_format_qualifier_02": "D8",
                              "test_performed_date_03": "X"
                            }
                          ],
                          "date_shipped_date_DTP": {
                            "date_time_qualifier_01": "011",
                            "date_time_period_format_qualifier_02": "D8",
                            "shipped_date_03": "XXXX"
                          },
                          "date_last_x_ray_date_DTP": {
                            "date_time_qualifier_01": "455",
                            "date_time_period_format_qualifier_02": "D8",
                            "last_x_ray_date_03": "XXXX"
                          },
                          "date_certification_revision_recertification_date_DTP": {
                            "date_time_qualifier_01": "607",
                            "date_time_period_format_qualifier_02": "D8",
                            "certification_revision_or_recertification_date_03": "XXXX"
                          },
                          "date_initial_treatment_date_DTP": {
                            "date_time_qualifier_01": "454",
                            "date_time_period_format_qualifier_02": "D8",
                            "initial_treatment_date_03": "XXXXXX"
                          },
                          "date_last_certification_date_DTP": {
                            "date_time_qualifier_01": "461",
                            "date_time_period_format_qualifier_02": "D8",
                            "last_certification_date_03": "XXXXXX"
                          },
                          "date_begin_therapy_date_DTP": {
                            "date_time_qualifier_01": "463",
                            "date_time_period_format_qualifier_02": "D8",
                            "begin_therapy_date_03": "XX"
                          },
                          "date_prescription_date_DTP": {
                            "date_time_qualifier_01": "471",
                            "date_time_period_format_qualifier_02": "D8",
                            "prescription_date_03": "XX"
                          },
                          "date_service_date_DTP": {
                            "date_time_qualifier_01": "472",
                            "date_time_period_format_qualifier_02": "D8",
                            "service_date_03": "XXX"
                          },
                          "obstetric_anesthesia_additional_units_QTY": {
                            "quantity_qualifier_01": "FL",
                            "obstetric_additional_units_02": 0
                          },
                          "ambulance_patient_count_QTY": {
                            "quantity_qualifier_01": "PT",
                            "ambulance_patient_count_02": 0
                          },
                          "test_result_MEA": [
                            {
                              "measurement_reference_identification_code_01": "OG",
                              "measurement_qualifier_02": "R3",
                              "test_results_03": 0
                            }
                          ],
                          "contract_information_CN1": {
                            "contract_type_code_01": "01",
                            "contract_amount_02": 0,
                            "contract_percentage_03": 0,
                            "contract_code_04": "XXXX",
                            "terms_discount_percentage_05": 0,
                            "contract_version_identifier_06": "XX"
                          },
                          "immunization_batch_number_REF": {
                            "reference_identification_qualifier_01": "BT",
                            "immunization_batch_number_02": "XXXXXX"
                          },
                          "referring_clinical_laboratory_improvement_amendment_clia_facility_identification_REF": {
                            "reference_identification_qualifier_01": "F4",
                            "referring_clia_number_02": "X"
                          },
                          "line_item_control_number_REF": {
                            "reference_identification_qualifier_01": "6R",
                            "line_item_control_number_02": "XX"
                          },
                          "mammography_certification_number_REF": {
                            "reference_identification_qualifier_01": "EW",
                            "mammography_certification_number_02": "XXXXX"
                          },
                          "adjusted_repriced_line_item_reference_number_REF": {
                            "reference_identification_qualifier_01": "9D",
                            "adjusted_repriced_line_item_reference_number_02": "XXXXXX"
                          },
                          "repriced_line_item_reference_number_REF": {
                            "reference_identification_qualifier_01": "9B",
                            "repriced_line_item_reference_number_02": "XX"
                          },
                          "referral_number_REF": [
                            {
                              "reference_identification_qualifier_01": "9F",
                              "referral_number_02": "XXX",
                              "reference_identifier_04": {
                                "reference_identification_qualifier_01": "2U",
                                "other_payer_primary_identifier_02": "XXXX"
                              }
                            }
                          ],
                          "prior_authorization_REF": [
                            {
                              "reference_identification_qualifier_01": "G1",
                              "prior_authorization_or_referral_number_02": "XXXXXX",
                              "reference_identifier_04": {
                                "reference_identification_qualifier_01": "2U",
                                "other_payer_primary_identifier_02": "X"
                              }
                            }
                          ],
                          "clinical_laboratory_improvement_amendment_clia_number_REF": {
                            "reference_identification_qualifier_01": "X4",
                            "clinical_laboratory_improvement_amendment_number_02": "XXXXXX"
                          },
                          "sales_tax_amount_AMT": {
                            "amount_qualifier_code_01": "T",
                            "sales_tax_amount_02": 0
                          },
                          "postage_claimed_amount_AMT": {
                            "amount_qualifier_code_01": "F4",
                            "postage_claimed_amount_02": 0
                          },
                          "file_information_K3": [
                            {
                              "fixed_format_information_01": "XXXX"
                            }
                          ],
                          "line_note_NTE": {
                            "note_reference_code_01": "ADD",
                            "line_note_text_02": "XX"
                          },
                          "third_party_organization_notes_NTE": {
                            "note_reference_code_01": "TPO",
                            "line_note_text_02": "XXXXXX"
                          },
                          "purchased_service_information_PS1": {
                            "purchased_service_provider_identifier_01": "XXXX",
                            "purchased_service_charge_amount_02": 0
                          },
                          "line_pricing_repricing_information_HCP": {
                            "pricing_methodology_01": "13",
                            "repriced_allowed_amount_02": 0,
                            "repriced_saving_amount_03": 0,
                            "repricing_organization_identifier_04": "XX",
                            "repricing_per_diem_or_flat_rate_amount_05": 0,
                            "repriced_approved_ambulatory_patient_group_code_06": "XX",
                            "repriced_approved_ambulatory_patient_group_amount_07": 0,
                            "product_or_service_id_qualifier_09": "HC",
                            "repriced_approved_hcpcs_code_10": "XXXXX",
                            "unit_or_basis_for_measurement_code_11": "MJ",
                            "repriced_approved_service_unit_count_12": 0,
                            "reject_reason_code_13": "T4",
                            "policy_compliance_code_14": "3",
                            "exception_code_15": "2"
                          },
                          "drug_identification_LIN_loop": {
                            "drug_identification_LIN": {
                              "product_or_service_id_qualifier_02": "UK",
                              "national_drug_code_or_universal_product_number_03": "X"
                            },
                            "drug_quantity_CTP": {
                              "national_drug_unit_count_04": 0,
                              "composite_unit_of_measure_05": {
                                "code_qualifier_01": "ML"
                              }
                            },
                            "prescription_or_compound_drug_association_number_REF": {
                              "reference_identification_qualifier_01": "VY",
                              "prescription_number_02": "X"
                            }
                          },
                          "supervising_provider_name_NM1_loop": {
                            "supervising_provider_name_NM1": {
                              "entity_identifier_code_01": "DQ",
                              "entity_type_qualifier_02": "1",
                              "supervising_provider_last_name_03": "XXX",
                              "supervising_provider_first_name_04": "X",
                              "supervising_provider_middle_name_or_initial_05": "XXXXX",
                              "supervising_provider_name_suffix_07": "XXXXXX",
                              "identification_code_qualifier_08": "XX",
                              "supervising_provider_identifier_09": "XXX"
                            },
                            "supervising_provider_secondary_identification_REF": [
                              {
                                "reference_identification_qualifier_01": "LU",
                                "supervising_provider_secondary_identifier_02": "X",
                                "reference_identifier_04": {
                                  "reference_identification_qualifier_01": "2U",
                                  "other_payer_primary_identifier_02": "X"
                                }
                              }
                            ]
                          },
                          "rendering_provider_name_NM1_loop": {
                            "rendering_provider_name_NM1": {
                              "entity_identifier_code_01": "82",
                              "entity_type_qualifier_02": "2",
                              "rendering_provider_last_or_organization_name_03": "XXXXXX",
                              "rendering_provider_first_name_04": "XXXXXX",
                              "rendering_provider_middle_name_or_initial_05": "XXXX",
                              "rendering_provider_name_suffix_07": "XXXXX",
                              "identification_code_qualifier_08": "XX",
                              "rendering_provider_identifier_09": "XXXXXX"
                            },
                            "rendering_provider_specialty_information_PRV": {
                              "provider_code_01": "PE",
                              "reference_identification_qualifier_02": "PXC",
                              "provider_taxonomy_code_03": "X"
                            },
                            "rendering_provider_secondary_identification_REF": [
                              {
                                "reference_identification_qualifier_01": "1G",
                                "rendering_provider_secondary_identifier_02": "XXXXXX",
                                "reference_identifier_04": {
                                  "reference_identification_qualifier_01": "2U",
                                  "other_payer_primary_identifier_02": "XXXXX"
                                }
                              }
                            ]
                          },
                          "ordering_provider_name_NM1_loop": {
                            "ordering_provider_name_NM1": {
                              "entity_identifier_code_01": "DK",
                              "entity_type_qualifier_02": "1",
                              "ordering_provider_last_name_03": "XXXXX",
                              "ordering_provider_first_name_04": "XXXXXX",
                              "ordering_provider_middle_name_or_initial_05": "XXX",
                              "ordering_provider_name_suffix_07": "XX",
                              "identification_code_qualifier_08": "XX",
                              "ordering_provider_identifier_09": "XX"
                            },
                            "ordering_provider_address_N3": {
                              "ordering_provider_address_line_01": "X",
                              "ordering_provider_address_line_02": "XXXX"
                            },
                            "ordering_provider_city_state_zip_code_N4": {
                              "ordering_provider_city_name_01": "XXXX",
                              "ordering_provider_state_or_province_code_02": "XX",
                              "ordering_provider_postal_zone_or_zip_code_03": "XXXXXXX",
                              "country_code_04": "XX"
                            },
                            "ordering_provider_secondary_identification_REF": [
                              {
                                "reference_identification_qualifier_01": "0B",
                                "ordering_provider_secondary_identifier_02": "XXXXX",
                                "reference_identifier_04": {
                                  "reference_identification_qualifier_01": "2U",
                                  "other_payer_primary_identifier_02": "X"
                                }
                              }
                            ],
                            "ordering_provider_contact_information_PER": {
                              "contact_function_code_01": "IC",
                              "ordering_provider_contact_name_02": "XXXXX",
                              "communication_number_qualifier_03": "FX",
                              "communication_number_04": "X",
                              "communication_number_qualifier_05": "EM",
                              "communication_number_06": "X",
                              "communication_number_qualifier_07": "EX",
                              "communication_number_08": "X"
                            }
                          },
                          "referring_provider_name_NM1_loop": [
                            {
                              "referring_provider_name_NM1": {
                                "entity_identifier_code_01": "P3",
                                "entity_type_qualifier_02": "1",
                                "referring_provider_last_name_03": "XX",
                                "referring_provider_first_name_04": "XX",
                                "referring_provider_middle_name_or_initial_05": "XXXX",
                                "referring_provider_name_suffix_07": "XXX",
                                "identification_code_qualifier_08": "XX",
                                "referring_provider_identifier_09": "XXXX"
                              },
                              "referring_provider_secondary_identification_REF": [
                                {
                                  "reference_identification_qualifier_01": "0B",
                                  "referring_provider_secondary_identifier_02": "X",
                                  "reference_identifier_04": {
                                    "reference_identification_qualifier_01": "2U",
                                    "other_payer_primary_identifier_02": "XXX"
                                  }
                                }
                              ]
                            }
                          ],
                          "service_facility_location_name_NM1_loop": {
                            "service_facility_location_name_NM1": {
                              "entity_identifier_code_01": "77",
                              "entity_type_qualifier_02": "2",
                              "laboratory_or_facility_name_03": "XX",
                              "identification_code_qualifier_08": "XX",
                              "laboratory_or_facility_primary_identifier_09": "XXX"
                            },
                            "service_facility_location_address_N3": {
                              "laboratory_or_facility_address_line_01": "XXXXX",
                              "laboratory_or_facility_address_line_02": "XXXXX"
                            },
                            "service_facility_location_city_state_zip_code_N4": {
                              "laboratory_or_facility_city_name_01": "XX",
                              "laboratory_or_facility_state_or_province_code_02": "XX",
                              "laboratory_or_facility_postal_zone_or_zip_code_03": "XXXX",
                              "country_code_04": "XX"
                            },
                            "service_facility_location_secondary_identification_REF": [
                              {
                                "reference_identification_qualifier_01": "G2",
                                "service_facility_location_secondary_identifier_02": "XXXXX",
                                "reference_identifier_04": {
                                  "reference_identification_qualifier_01": "2U",
                                  "other_payer_primary_identifier_02": "XXXX"
                                }
                              }
                            ]
                          },
                          "ambulance_drop_off_location_NM1_loop": {
                            "ambulance_drop_off_location_NM1": {
                              "entity_identifier_code_01": "45",
                              "entity_type_qualifier_02": "2",
                              "ambulance_drop_off_location_03": "XXXXXX"
                            },
                            "ambulance_drop_off_location_address_N3": {
                              "ambulance_drop_off_address_line_01": "XX",
                              "ambulance_drop_off_address_line_02": "X"
                            },
                            "ambulance_drop_off_location_city_state_zip_code_N4": {
                              "ambulance_drop_off_city_name_01": "XXXXX",
                              "ambulance_drop_off_state_or_province_code_02": "XX",
                              "ambulance_drop_off_postal_zone_or_zip_code_03": "XXXX",
                              "country_code_04": "XX"
                            }
                          },
                          "purchased_service_provider_name_NM1_loop": {
                            "purchased_service_provider_name_NM1": {
                              "entity_identifier_code_01": "QB",
                              "entity_type_qualifier_02": "1",
                              "identification_code_qualifier_08": "XX",
                              "purchased_service_provider_identifier_09": "XX"
                            },
                            "purchased_service_provider_secondary_identification_REF": [
                              {
                                "reference_identification_qualifier_01": "0B",
                                "purchased_service_provider_secondary_identifier_02": "X",
                                "reference_identifier_04": {
                                  "reference_identification_qualifier_01": "2U",
                                  "other_payer_primary_identifier_02": "XXX"
                                }
                              }
                            ]
                          },
                          "ambulance_pick_up_location_NM1_loop": {
                            "ambulance_pick_up_location_NM1": {
                              "entity_identifier_code_01": "PW",
                              "entity_type_qualifier_02": "2"
                            },
                            "ambulance_pick_up_location_address_N3": {
                              "ambulance_pick_up_address_line_01": "XXXXX",
                              "ambulance_pick_up_address_line_02": "XXX"
                            },
                            "ambulance_pick_up_location_city_state_zip_code_N4": {
                              "ambulance_pick_up_city_name_01": "XXX",
                              "ambulance_pick_up_state_or_province_code_02": "XX",
                              "ambulance_pick_up_postal_zone_or_zip_code_03": "XXXX",
                              "country_code_04": "XXX"
                            }
                          },
                          "line_adjudication_information_SVD_loop": [
                            {
                              "line_adjudication_information_SVD": {
                                "other_payer_primary_identifier_01": "XXXXXXX",
                                "service_line_paid_amount_02": 0,
                                "composite_medical_procedure_identifier_03": {
                                  "product_or_service_id_qualifier_01": "HC",
                                  "procedure_code_02": "XXXX",
                                  "procedure_modifier_03": "XX",
                                  "procedure_modifier_04": "XX",
                                  "procedure_modifier_05": "XX",
                                  "procedure_modifier_06": "XX",
                                  "procedure_code_description_07": "XXX"
                                },
                                "paid_service_unit_count_05": 0,
                                "bundled_or_unbundled_line_number_06": 0
                              },
                              "line_adjustment_CAS": [
                                {
                                  "claim_adjustment_group_code_01": "PR",
                                  "adjustment_reason_code_02": "XXX",
                                  "adjustment_amount_03": 0,
                                  "adjustment_quantity_04": 0,
                                  "adjustment_reason_code_05": "XXXXX",
                                  "adjustment_amount_06": 0,
                                  "adjustment_quantity_07": 0,
                                  "adjustment_reason_code_08": "XXXX",
                                  "adjustment_amount_09": 0,
                                  "adjustment_quantity_10": 0,
                                  "adjustment_reason_code_11": "XXXXX",
                                  "adjustment_amount_12": 0,
                                  "adjustment_quantity_13": 0,
                                  "adjustment_reason_code_14": "XX",
                                  "adjustment_amount_15": 0,
                                  "adjustment_quantity_16": 0,
                                  "adjustment_reason_code_17": "XX",
                                  "adjustment_amount_18": 0,
                                  "adjustment_quantity_19": 0
                                }
                              ],
                              "line_check_or_remittance_date_DTP": {
                                "date_time_qualifier_01": "573",
                                "date_time_period_format_qualifier_02": "D8",
                                "adjudication_or_payment_date_03": "XXXXXX"
                              },
                              "remaining_patient_liability_AMT": {
                                "amount_qualifier_code_01": "EAF",
                                "remaining_patient_liability_02": 0
                              }
                            }
                          ],
                          "form_identification_code_LQ_loop": [
                            {
                              "form_identification_code_LQ": {
                                "code_list_qualifier_code_01": "UT",
                                "form_identifier_02": "XX"
                              },
                              "supporting_documentation_FRM": [
                                {
                                  "question_number_letter_01": "X",
                                  "question_response_02": "N",
                                  "question_response_03": "XXXXXX",
                                  "question_response_04": "2023-06-27",
                                  "question_response_05": 0
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "transaction_set_trailer_SE": {
        "transaction_segment_count_01": 381,
        "transaction_set_control_number_02": 1
      }
    }
  }
]