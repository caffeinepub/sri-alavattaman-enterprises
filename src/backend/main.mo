import Time "mo:core/Time";
import Text "mo:core/Text";
import Order "mo:core/Order";
import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Int "mo:core/Int";

actor {
  type VendorInquiry = {
    businessName : Text;
    contactPerson : Text;
    email : Text;
    phone : Text;
    materialType : Text;
    monthlyVolume : Nat;
    message : Text;
    timestamp : Time.Time;
  };

  type ContactMessage = {
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module VendorInquiry {
    public func compare(a : VendorInquiry, b : VendorInquiry) : Order.Order {
      Int.compare(b.timestamp, a.timestamp);
    };
  };

  module ContactMessage {
    public func compare(a : ContactMessage, b : ContactMessage) : Order.Order {
      Int.compare(b.timestamp, a.timestamp);
    };
  };

  let vendorInquiries = List.empty<VendorInquiry>();
  let contactMessages = List.empty<ContactMessage>();

  public shared ({ caller }) func submitVendorInquiry(inquiry : VendorInquiry) : async () {
    let newInquiry : VendorInquiry = {
      inquiry with
      timestamp = Time.now();
    };
    vendorInquiries.add(newInquiry);
  };

  public shared ({ caller }) func submitContactMessage(message : ContactMessage) : async () {
    let newMessage : ContactMessage = {
      message with
      timestamp = Time.now();
    };
    contactMessages.add(newMessage);
  };

  public query ({ caller }) func getAllVendorInquiries() : async [VendorInquiry] {
    vendorInquiries.toArray().sort();
  };

  public query ({ caller }) func getAllContactMessages() : async [ContactMessage] {
    contactMessages.toArray().sort();
  };

  public query ({ caller }) func getVendorInquiriesByMaterialType(materialType : Text) : async [VendorInquiry] {
    let filtered = vendorInquiries.filter(
      func(inquiry) {
        inquiry.materialType == materialType
      }
    );
    filtered.toArray().sort();
  };
};
